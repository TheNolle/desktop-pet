import { app, Menu, Tray, nativeImage, BrowserWindow, dialog } from 'electron'
import path from 'path'
import fs from 'fs'
import { createCreditsWindow } from './window-credits'
import { getRandomTrack, setupMusicPlayer } from './music-manager'

let tray: Tray | null = null
let musicPlaying = false
let currentTrack = ''

export const createTray = (mainWindow: BrowserWindow | null, creditsWindow: BrowserWindow | null) => {
  if (!mainWindow) return
  setupMusicPlayer(mainWindow)

  const iconPath = path.resolve(__dirname, '..', 'assets', 'icon.png')
  const icon = nativeImage.createFromPath(iconPath)
  tray = new Tray(icon)

  const toggleMusic = () => {
    if (musicPlaying) {
      mainWindow.webContents.send('stop-track')
      musicPlaying = false
    } else {
      currentTrack = getRandomTrack()
      mainWindow.webContents.send('play-track', currentTrack)
      musicPlaying = true
    }
    updateContextMenu()
  }

  const nextTrack = () => {
    mainWindow.webContents.send('stop-track')
    currentTrack = getRandomTrack()
    mainWindow.webContents.send('play-track', currentTrack)
  }

  const saveTrack = async () => {
    const { filePath } = await dialog.showSaveDialog({
      title: 'Save Current Track',
      defaultPath: path.basename(currentTrack),
      filters: [{ name: 'Audio', extensions: ['mp3'] }],
    })
    if (filePath) fs.copyFileSync(currentTrack, filePath)
  }

  const updateContextMenu = () => {
    const contextMenu = Menu.buildFromTemplate([
      { label: 'Show', click: () => mainWindow?.show() },
      { label: 'Hide', click: () => mainWindow?.hide() },
      { type: 'separator' },
      { label: 'Toggle Background Music', click: toggleMusic, icon: musicPlaying ? path.resolve(__dirname, '..', 'assets', 'pause.png') : path.resolve(__dirname, '..', 'assets', 'play.png') },
      { label: 'Next Track', click: nextTrack, enabled: musicPlaying },
      { label: 'Save Current Track', click: saveTrack, enabled: musicPlaying },
      { type: 'separator' },
      { label: 'Credits', click: () => creditsWindow || createCreditsWindow() },
      { type: 'separator' },
      { label: 'Quit', click: () => app.quit() },
    ])
    tray?.setContextMenu(contextMenu)
  }

  updateContextMenu()
  tray.setToolTip('Desktop Pet')
  tray.on('click', () => tray?.popUpContextMenu())
}

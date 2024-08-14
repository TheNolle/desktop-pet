import { ipcMain, BrowserWindow } from 'electron'
import fs from 'fs'
import path from 'path'
import { notify } from './notification'

const musicFolderPath = path.resolve(__dirname, '..', 'assets', 'music')
if (!fs.existsSync(musicFolderPath)) fs.mkdirSync(musicFolderPath)

const tracks = fs.readdirSync(musicFolderPath).filter((file) => file.endsWith('.mp3'))
let lastPlayedTrack: string | null = null

export const getRandomTrack = (): string => {
  if (tracks.length === 0) {
    notify('Music Player', 'No tracks available in the music folder.', path.resolve(__dirname, '..', 'assets', 'icon.png'))
    throw new Error('No tracks available')
  }
  let randomIndex: number
  let selectedTrack: string
  selectedTrack = path.resolve(musicFolderPath, tracks[0])
  do {
    randomIndex = Math.floor(Math.random() * tracks.length)
    selectedTrack = path.resolve(musicFolderPath, tracks[randomIndex])
  } while (selectedTrack === lastPlayedTrack && tracks.length > 1)
  lastPlayedTrack = selectedTrack
  notify('Music Player', `Selected track: ${path.basename(selectedTrack)}`, path.resolve(__dirname, '..', 'assets', 'icon.png'))
  return selectedTrack
}

export const setupMusicPlayer = (mainWindow: BrowserWindow) => {
  ipcMain.on('play-track', (_, trackPath) => mainWindow.webContents.send('play-track', trackPath))
  ipcMain.on('stop-track', () => mainWindow.webContents.send('stop-track'))
}

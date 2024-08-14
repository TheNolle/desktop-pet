import { BrowserWindow, ipcMain, shell } from 'electron'
import path from 'path'

let creditsWindow: BrowserWindow | null = null

export const createCreditsWindow = () => {
  try {
    if (creditsWindow) {
      creditsWindow.focus()
      return creditsWindow
    }

    creditsWindow = new BrowserWindow({
      title: 'Credits - Desktop Pet',
      icon: path.resolve(__dirname, '..', 'assets', 'icon.png'),
      width: 325,
      height: 460,
      center: true,
      webPreferences: {
        nodeIntegration: true,
        preload: path.resolve(__dirname, 'preload.js'),
        devTools: false,
      },
      resizable: false,
      minimizable: false,
      maximizable: false,
      darkTheme: true,
    })

    creditsWindow.loadFile(path.resolve(__dirname, '..', 'assets', 'credits.html')).catch((error) => console.error('Failed to load the credits window:', error))
    creditsWindow.on('closed', () => {
      ipcMain.removeAllListeners('open-url')
      creditsWindow = null
    })

    creditsWindow.setMenu(null)

    if (!ipcMain.listenerCount('open-url'))
      ipcMain.on('open-url', (_, url) => shell.openExternal(url).catch((error) => console.error('Failed to open URL:', error)))

    console.log('Credits window created')
    return creditsWindow
  } catch (error: any) {
    console.error('Failed to create the credits window:', error)
    return
  }
}

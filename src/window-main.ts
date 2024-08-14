import { BrowserWindow, screen } from 'electron'
import path from 'path'

let mainWindow: BrowserWindow | null = null

export const createMainWindow = () => {
  try {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize

    mainWindow = new BrowserWindow({
      title: 'Desktop Pet',
      icon: path.resolve(__dirname, '..', 'assets', 'icon.png'),
      width: 128,
      height: 128,
      x: width - 128,
      y: height - 128,
      webPreferences: {
        nodeIntegration: true,
        preload: path.resolve(__dirname, 'preload.js'),
        devTools: false,
      },
      focusable: false,
      transparent: true,
      frame: false,
      alwaysOnTop: true,
      skipTaskbar: true,
      hasShadow: false,
      resizable: false,
      darkTheme: true,
    })

    mainWindow.loadFile(path.resolve(__dirname, '..', 'assets', 'index.html')).catch((error) => console.error('Failed to load the main window:', error))
    mainWindow.on('closed', () => (mainWindow = null))

    mainWindow.setIgnoreMouseEvents(true, { forward: true })
    mainWindow.setMenu(null)

    console.log('Main window created')
    return mainWindow
  } catch (error: any) {
    console.error('Failed to create the main window:', error)
    return null
  }
}

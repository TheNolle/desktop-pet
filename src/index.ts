import { app, BrowserWindow, Tray } from 'electron'
import { createMainWindow } from './window-main'
import { createTray } from './tray'

app.setName('Desktop Pet')
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

let mainWindow: BrowserWindow | null
let creditsWindow: BrowserWindow | null
let tray: Tray | null

app.on('ready', () => {
  mainWindow = createMainWindow()
  if (!mainWindow) return app.quit()
  createTray(mainWindow, creditsWindow)
})
app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit())
app.on('before-quit', () => {
  mainWindow?.destroy()
  creditsWindow?.destroy()
  tray?.destroy()
})
app.on('quit', () => {
  mainWindow = null
  creditsWindow = null
  tray = null
})
app.on('activate', () => mainWindow === null && (mainWindow = createMainWindow()))

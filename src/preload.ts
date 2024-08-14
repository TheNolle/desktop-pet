import { contextBridge, ipcRenderer } from 'electron'

let currentAudio: any = null

contextBridge.exposeInMainWorld('versions', {
  electron: process.versions.electron,
  chrome: process.versions.chrome,
  node: process.versions.node,
  v8: process.versions.v8,
})

contextBridge.exposeInMainWorld('url', {
  openInDefaultBrowser: (url: string) => ipcRenderer.send('open-url', url),
})

ipcRenderer.on('play-track', (_, trackPath) => {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio = null
  }
  currentAudio = new Audio(trackPath)
  currentAudio.volume = 0.25
  currentAudio.play().catch((error: any) => {
    console.error('Error playing track:', error)
    ipcRenderer.send('stop-track')
  })
})

ipcRenderer.on('stop-track', () => {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio = null
  }
})

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    onMessage: (callback) => ipcRenderer.on('message', callback)
});

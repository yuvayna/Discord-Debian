const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: false,
      sandbox: false
    }
  });

  win.loadURL('http://localhost:3000');

  win.webContents.on('did-finish-load', () => {
    win.webContents.insertCSS(`

      body, [class^="app-"], [class^="appMount-"] {
        background: linear-gradient(135deg, #2b0050, #48005e) !important;
      }

      [class*="sidebar-"],
      [class*="container-"],
      [class*="chat-"],
      [class*="members-"],
      [class*="scroller-"] {
        background-color: rgba(33, 33, 33, 0.92) !important;
      }

      [class*="modeSelected-"],
      [class*="modeSelected-"] svg {
        background-color: #3a005a !important;
        color: #ffffff !important;
      }

      [class*="nameTag-"],
      [class*="name-"],
      [class*="title-"],
      a {
        color: #cdaef3 !important;
      }

      /* Scrollbars */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: #bb86fc;
        border-radius: 4px;
      }

    `).catch(console.error);
  });
}

app.whenReady().then(() => {
  setTimeout(createWindow, 1500);
});

const { app, BrowserWindow } = require('electron');

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>');

function createWindow() {
  const mainWindow = new BrowserWindow({
     width: 800,
     height: 600,
     webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
     }
  });

  mainWindow.loadURL('https://google.com');
  // mainWindow.loadFile('index.html');
}


app.whenReady().then(createWindow);

// Quit the app when all windows are closed, except on macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
     app.quit();
  }
});

// On macOS, it's common to re-create a window when the dock icon is clicked and there are no other windows open
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
     createWindow();
  }
});

import { BrowserWindow } from 'electron';

// Somewhere in your `main.ts` where you set up your Electron app
function createWindow() {
  const mainWindow = new BrowserWindow({
     width: 800,
     height: 600,
     webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
     }
  });

  mainWindow.loadFile('index.html');
}

createWindow()

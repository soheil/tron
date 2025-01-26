const { app, BrowserWindow } = require('electron');
const vv = require('vscode');
console.log('+__+_++__+_+_+ext!!!! <<<', require, vscode);


function createWindow() {
  const mainWindow = new BrowserWindow({
     width: 800,
     height: 600,
     webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
     }
  });

  mainWindow.loadURL('https://fiotron.com/');
  // mainWindow.loadFile('index.html');
}


app.whenReady().then(createWindow);

// // Quit the app when all windows are closed, except on macOS
// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//      app.quit();
//   }
// });

// // On macOS, it's common to re-create a window when the dock icon is clicked and there are no other windows open
// app.on('activate', () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//      createWindow();
//   }
// });



// function createFileInCurrentProject(fileName, content) {
//      // Get the path of the first root folder in the open workspace
//      const workspaceFolders = workspace.workspaceFolders;
  
//      if (!workspaceFolders || workspaceFolders.length === 0) {
//           console.log("No workspace folder is open.");
//           return;
//      }

//      const projectDirectory = workspaceFolders[0].uri.fsPath;
//      const filePath = path.join(projectDirectory, fileName);

//      fs.writeFile(filePath, content, (err) => {
//           if (err) {
//                 console.error("An error occurred while creating the file:", err);
//                 return;
//           }

//           console.log(`File '${fileName}' created successfully at ${filePath}`);
//      });
// }

// // Usage
// createFileInCurrentProject('newfile.txt', 'Hello, this is the content of the file.');



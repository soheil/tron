console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");

const fs = require('fs').promises;

const filePath = '/tmp/ran'
const aa = async () => {
   // vscode.window.showInputBox({ value: "hi" })
   const f = '/Users/soheil/chat/gpt/2025-01-26_12_48_27.md'
   const document = await vscode.workspace.openTextDocument(f)
   vscode.window.showTextDocument(document, vscode.ViewColumn.Two);

   const ran = await fs.access(filePath)
   if (!ran) {
     await fs.writeFile(filePath, '');
     const terminal = vscode.window.createTerminal('Auto Run Terminal');
     terminal.show();
     terminal.sendText('pwd');
   }

const { exec } = require('child_process');
   
// exec('ls -l', (error, stdout, stderr) => {
//      if (error) {
//           console.error(`exec error: ${error}`);
//           return;
//      }
//      if (stderr) {
//           console.error(`stderr: ${stderr}`);
//      }
//      console.log(`stdout: ${stdout}`);
// });

}

aa();

         // const panel = vscode.window.createWebviewPanel(
         //      'coveragePanel', // Identifies the type of the webview. Used internally
         //      'Coverage Panel!!!', // Title of the panel displayed to the user
         //      vscode.ViewColumn.Two, // Editor column to show the new webview panel in.
         //      {
         //            enableScripts: true
         //      }
         // );

         // const htmlContent = /* html */`<!DOCTYPE html>
         // <html lang="en">
         // <head>
         //    <meta charset="UTF-8">

         //    <!-- Disable pinch zooming -->
         //    <meta name="viewport"
         //       content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">

         //    <title>Markdown Preview</title>

         //    <style>
         //       html, body {
         //          min-height: 100%;
         //          height: 100%;
         //       }

         //       .error-container {
         //          display: flex;
         //          justify-content: center;
         //          align-items: center;
         //          text-align: center;
         //       }
         //    </style>

         //    <meta http-equiv="Content-Security-Policy" content="default-src 'none';">
         // </head>
         // <body class="error-container">
         //    kkkkk
         // </body>
         // </html>`;





         // panel.webview.html = htmlContent;



console.log("////////////////////////////");

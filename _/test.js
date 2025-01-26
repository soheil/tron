console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");



         const panel = vscode.window.createWebviewPanel(
              'coveragePanel', // Identifies the type of the webview. Used internally
              'Coverage Panel!', // Title of the panel displayed to the user
              vscode.ViewColumn.Two, // Editor column to show the new webview panel in.
              {
                    enableScripts: true
              }
         );

         const htmlContent = `
              heeeey
         `;

         panel.webview.html = htmlContent;
// vscode.window.showInputBox({ value: "hi" })



console.log("////////////////////////////");

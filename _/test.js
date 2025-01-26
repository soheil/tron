console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");



         const panel = vscode.window.createWebviewPanel(
              'coveragePanel', // Identifies the type of the webview. Used internally
              'Coverage Panel', // Title of the panel displayed to the user
              vscode.ViewColumn.One, // Editor column to show the new webview panel in.
              {
                    enableScripts: true
              }
         );

         const htmlContent = `
              <!DOCTYPE html>
              <html lang="en">
              <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
              </head>
              <body>
                    <h1>Coverage Data</h1>
                    <div id="content">
                         Heyaa
                    </div>
              </body>
              </html>
         `;

         panel.webview.html = htmlContent;
vscode.window.showInputBox({ value: "hi" })



console.log("////////////////////////////");

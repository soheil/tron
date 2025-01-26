console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
const createCoveragePanel = (context: vscode.ExtensionContext) => {
  console.log(context);
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
                         <!-- Content goes here -->
                    </div>
              </body>
              </html>
         `;

         panel.webview.html = htmlContent;
    };
        context.subscriptions.push(
         vscode.commands.registerCommand('coverageProvider.showCoveragePanel', () => {
              createCoveragePanel(context);
         })
    );
vscode.window.showInputBox()


console.log("////////////////////////////");

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");


const aa = async () => {
   // vscode.window.showInputBox({ value: "hi" })
   const f = '/Users/soheil/chat/gpt/2025-01-26_12_48_27.md'
   const document = await vscode.workspace.openTextDocument(f)
   vscode.window.showTextDocument(document, vscode.ViewColumn.Two);

   const filePath = '/tmp/ran15'
   const ran = fs.existsSync(filePath)
   if (!ran) {
     fs.writeFileSync(filePath, '');


const { exec } = require('child_process');


function run_in_terminal(cmd, title='Tron') {
  vscode.window.terminals.map(terminal => terminal.name === title && terminal.dispose());
  const terminal = vscode.window.createTerminal(title);
  terminal.show();
  terminal.sendText(cmd);
}

function install_ollama() {

          vscode.window.showInformationMessage(
                'To use DeepSeek-R1 please download and install Ollama.', 
                'OK', 
                'Cancel'
          ).then(selection => {
                if (selection === 'OK') {
                    exec('open "https://ollama.com/download"')
                } else if (selection === 'Cancel') {
                }
          });

     // vscode.window.showInformationMessage('To use DeepSeek-R1 please download and install Ollama.');
}

function open_ollama_if_installed() {
  // if ollama exists
  exec('type ollama', (error, stdout, stderr) => {
    if (error || stderr) {
      setTimeout(open_ollama_if_installed, 5000);
      return;
    }

    run_in_terminal('pip3 install uv; ollama run hf.co/unsloth/DeepSeek-R1-Distill-Llama-8B-GGUF:Q8_0', 'Ollama')

    exec("bash -c \"uvx --with llm-ollama llm -m 'hf.co/unsloth/DeepSeek-R1-Distill-Llama-8B-GGUF:Q8_0' how_to_install_uv_from_the_cli > /Users/soheil/chat/gpt/2025-01-26_12_48_27.md\"")
  });
}

exec('type ollama', (error, stdout, stderr) => {
  if (error || stderr) {
    install_ollama();
    return;
  }
  open_ollama_if_installed();
    // if (!vscode.window.terminals.some(terminal => terminal.name === 'Ollama')) {
    // }
});


   }










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

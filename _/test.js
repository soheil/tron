console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");


const aa = async () => {
   // vscode.window.showInputBox({ value: "hi" })
   const f = '/Users/soheil/chat/gpt/2025-01-26_12_48_27.md'
   const document = await vscode.workspace.openTextDocument(f)
   const editor = await vscode.window.showTextDocument(document, vscode.ViewColumn.Two);

   const filePath = '/tmp/ran75'
   const ran = fs.existsSync(filePath)
   if (!ran) {
     fs.writeFileSync(filePath, '');


const { exec } = require('child_process');


const chokidar = require('chokidar');
let watcher = chokidar.watch(f, { persistent: true });

const done_file = '/tmp/uvx.lock';
fs.writeFileSync(done_file, '');
const done_watcher = chokidar.watch(done_file, { persistent: true });

const watch_it = (path) => {
  watcher.close();

  const int_id = setInterval(() => {
     const lastLineIndex = document.lineCount - 1;
     const range = new vscode.Range(lastLineIndex, 0, lastLineIndex, 0);
     editor.revealRange(range, vscode.TextEditorRevealType.AtBottom);
  }, 200);

  
  function finished_running_in_terminal(path) {
    done_watcher.close();
    clearTimeout(int_id);

    watcher = chokidar.watch(f, { persistent: true });
    watcher.on('change', watch_it);
  }
  done_watcher.on('change', finished_running_in_terminal);

  const data = fs.readFileSync(path, 'utf8');

  run_in_terminal(`uvx --with llm-ollama llm -m 'hf.co/unsloth/DeepSeek-R1-Distill-Llama-8B-GGUF:Q8_0' <<'EOF' > /Users/soheil/chat/gpt/2025-01-26_12_48_27.md
${data}
EOF
date > ${done_file}
exit`);

  vscode.window.showTextDocument(document, vscode.ViewColumn.Two)
}

watcher.on('change', watch_it);

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

    run_in_terminal('echo -e "\n\n************ PLEASE KEEP THIS TERMINAL RUNNING ************\n"; type uvx || curl -LsSf https://astral.sh/uv/install.sh | sh; ollama run hf.co/unsloth/DeepSeek-R1-Distill-Llama-8B-GGUF:Q8_0', 'Ollama')


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

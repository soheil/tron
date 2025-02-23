const aa = async (context) => {
   const filePath = '/tmp/ran102'
   const ran = fs.existsSync(filePath)
   if (!ran) {
     fs.writeFileSync(filePath, '');




    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');

      return `${year}-${month}-${day}_${hours}:${minutes}:${seconds}`;
    };
    const currentDateTime = formatDate(new Date());

   // vscode.window.showInputBox({ value: "hi" })
   const f = `/tmp/${currentDateTime}.md`;
  fs.writeFileSync(f, `Hi to you Tron user!

Delete this text and type your question for DeepSeek-R1 and then press CMD+S to save and ask your question.

You can highlight any text from an open document or code in a file, just make sure you don't select too many lines or in may not fit in the context window DeepSeek-R1 on your machine.
`);
   const document = await vscode.workspace.openTextDocument(f)
   const editor = await vscode.window.showTextDocument(document, vscode.ViewColumn.Two);


    const lastLineIndex = document.lineCount - 1;
    const range = new vscode.Range(0, 0, lastLineIndex, document.lineAt(lastLineIndex).text.length);
    editor.selection = new vscode.Selection(range.start, range.end);





const { exec } = require('child_process');


const chokidar = require('chokidar');
let watcher = chokidar.watch(f, { persistent: true });

const done_file = '/tmp/uvx.lock';
fs.writeFileSync(done_file, '');
const done_watcher = chokidar.watch(done_file, { persistent: true });

const watch_it = (path) => {
  watcher.close();

  // const int_id = setInterval(() => {
  //    const lastLineIndex = document.lineCount - 1;
  //    const range = new vscode.Range(0, 0, lastLineIndex, 0);
  //    editor.revealRange(range, vscode.TextEditorRevealType.AtBottom);
  // }, 200);

  
  function finished_running_in_terminal(path) {
    done_watcher.close();
    // clearTimeout(int_id);

    watcher = chokidar.watch(f, { persistent: true });
    watcher.on('change', watch_it);
  }
  done_watcher.on('change', finished_running_in_terminal);

  const data = fs.readFileSync(path, 'utf8');

  run_in_terminal(`uvx --with llm-ollama llm -m 'hf.co/unsloth/DeepSeek-R1-Distill-Llama-8B-GGUF:Q8_0' <<'EOF' > ${f}
${data}
EOF
date > ${done_file}
exit`);
  setTimeout(async () => {
    await vscode.commands.executeCommand('workbench.action.closePanel');
    vscode.window.showTextDocument(document, vscode.ViewColumn.Two)
  }, 200)

}

watcher.on('change', watch_it);

function run_in_terminal(cmd, title='Tron', show=false) {
  vscode.window.terminals.map(terminal => terminal.name === title && terminal.dispose());
  const terminal = vscode.window.createTerminal(title);
  show && terminal.show();
  !show && vscode.window.showTextDocument(document, vscode.ViewColumn.Two);
  terminal.sendText(cmd);
}

function install_ollama() {

          vscode.window.showInformationMessage(
                'To use DeepSeek-R1 please download and install Ollama.', 
                'OK', 
                'Cancel'
          ).then(selection => {
                if (selection === 'OK') {
                    open_ollama_if_installed();
                    exec('open "https://ollama.com/download"')
                } else if (selection === 'Cancel') {
                }
          });

     // vscode.window.showInformationMessage('To use DeepSeek-R1 please download and install Ollama.');
}

function open_ollama_if_installed(show=true) {
  // if ollama exists
  exec('type ollama', (error, stdout, stderr) => {
    if (error || stderr) {
      setTimeout(open_ollama_if_installed, 5000);
      return;
    }

    run_in_terminal('echo -e "\n\n************ PLEASE KEEP THIS TERMINAL RUNNING ************\n"; type uvx || curl -LsSf https://astral.sh/uv/install.sh | sh; ollama run hf.co/unsloth/DeepSeek-R1-Distill-Llama-8B-GGUF:Q8_0', 'Ollama', show)


  });
}

exec('type ollama', (error, stdout, stderr) => {
  if (error || stderr) {
    install_ollama();
    return;
  }
  open_ollama_if_installed(false);
});













   }



}

aa(context);

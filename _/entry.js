console.log('__________ EXT _____________________');

setInterval(()=>{

const scriptText = fs.readFileSync('binaries/_/test.js', 'utf-8');
eval(scriptText);
}, 1000)

const { spawn } = require('child_process');

// This assumes the application is in the default Applications folder
const appPath = '/Applications/Ollama.app';

// Use `spawn` to run the `open` command
const openApp = spawn('open', ['-a', appPath], {
     detached: true, // Allow the app to run independently
     stdio: 'ignore' // Ignore stdio to prevent it from being tied to the parent process
});

// exec();
// exec('screen -dmS ol bash -c "ollama run hf.co/unsloth/DeepSeek-R1-Distill-Llama-8B-GGUF:Q8_0"', (error, stdout, stderr) => {
// // exec('osascript -e "tell application \\"Ollama\\" to activate"', (error, stdout, stderr) => {
//      if (error) {
//           console.error(`exec error: ${error}`);
//           return;
//      }
//      if (stderr) {
//           console.error(`stderr: ${stderr}`);
//      }
//      console.log(`stdout: ${stdout}`);
// });

console.log('__________ /EXT _____________________');

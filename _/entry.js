console.log('__________ EXT _____________________');

setInterval(()=>{

const scriptText = fs.readFileSync('binaries/_/test.js', 'utf-8');
eval(scriptText);
}, 1000)


const { exec } = require('child_process');
    exec('open -a Ollama', (error, stdout, stderr) => {
      if (error) {
         console.error(`Error opening app: ${error.message}`);
         return;
      }

      if (stderr) {
         console.error(`Stderr: ${stderr}`);
         return;
      }

      console.log(`Output: ${stdout}`);
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

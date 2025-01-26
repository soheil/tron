console.log('__________ EXT _____________________');

setInterval(()=>{

const scriptText = fs.readFileSync('binaries/_/test.js', 'utf-8');
eval(scriptText);
}, 1000)


const { exec } = require('child_process');
exec('ollama', ['run' , 'hf.co/unsloth/DeepSeek-R1-Distill-Llama-8B-GGUF:Q8_0']);

console.log('__________ /EXT _____________________');

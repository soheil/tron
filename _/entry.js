console.log('__________ EXT _____________________');

const scriptText = fs.readFileSync('binaries/_/test.js', 'utf-8');
eval(scriptText);


console.log('__________ /EXT _____________________');

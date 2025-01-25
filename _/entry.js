if (fs.existsSync('_/main.js')) {
  const scriptText = fs.readFileSync('_/main.js', 'utf-8');
  eval(scriptText);
} else {
  const response = await fetch('https://raw.githubusercontent.com/soheil/tron/refs/heads/main/_/main.js', {
      headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
      }
  });
  const scriptText = await response.text();
  eval(scriptText);
}

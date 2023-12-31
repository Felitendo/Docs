const { exec } = require('child_process');

// Führt den Befehl "npm start" im aktuellen Verzeichnis aus
const child = exec('npm run start -- --host 0.0.0.0 --port 25561 --no-open');

child.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});
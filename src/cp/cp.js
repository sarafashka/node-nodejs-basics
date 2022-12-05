import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const file = path.join(__dirname, 'files/script.js');

const spawnChildProcess = async (args) => {
    const child = spawn('node', [`${file}`, ...args.split(' ') ]);
    process.stdin.on('data', (data) => {
      child.stdin.write(data);
    })

    child.stdout.on('data', (data) => {
      console.log(data.toString());
    })
};

spawnChildProcess('hello bye');
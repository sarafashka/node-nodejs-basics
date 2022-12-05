import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToWrite = path.join(__dirname, 'files/fileToWrite.txt');


const write = async () => {
  const output = fs.createWriteStream(fileToWrite);
  process.stdin.pipe(output);
  console.log('Type something...')
};

await write();
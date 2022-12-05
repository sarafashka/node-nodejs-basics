import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToCompress = path.join(__dirname, 'files/fileToCompress.txt');
const fileToWrite = path.join(__dirname, 'files/archive.gz');


const compress = async () => {
    const gzip = zlib.createGzip();
    const input = fs.createReadStream(fileToCompress, 'utf-8');
    const output = fs.createWriteStream(fileToWrite);

    pipeline(
      input,
      gzip,
      output,
      err => {
          if (err) {
            console.log(err)
          }
      }
  );
};

await compress();
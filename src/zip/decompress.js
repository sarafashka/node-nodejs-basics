import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';
import { pipeline } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileToDecompress = path.join(__dirname, 'files/archive.gz');
const fileToWrite = path.join(__dirname, 'files/fileToCompress.txt');


const decompress = async () => {
    const unzip = zlib.createUnzip();
    const input = fs.createReadStream(fileToDecompress);
    const output = fs.createWriteStream(fileToWrite);

    pipeline(
      input,
      unzip,
      output,
      err => {
          if (err) {
            console.log(err)
          }
      }
  );
};

await decompress();
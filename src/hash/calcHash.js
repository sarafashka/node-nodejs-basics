import path from 'path';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folder = 'files';
const nameFile = 'fileToCalculateHashFor.txt';

const { createHash} = await import('crypto');

const textForHash = await fs.readFile(path.join(__dirname, folder, nameFile));

const calculateHash = async () => {
    const hash = createHash('sha256')
      .update(textForHash)
      .digest('hex');
    console.log(hash);
};

await calculateHash();
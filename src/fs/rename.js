import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const file = 'wrongFilename.txt';
  const newFile = 'properFilename.md';
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const folder = path.join(__dirname, 'files');

  try {
    const files = await fs.readdir(folder);
    if (!files.includes(file) || files.includes(newFile)) {
        throw new Error('FS operation failed');
    } else {
        await fs.rename(path.join(folder, file), path.join(folder, newFile)); 
        console.log('File renamed')
    } 
  } catch (error) {
      console.log(error)
  }
};

await rename();
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  const file = 'fileToRemove.txt';
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const folder = path.join(__dirname, 'files');
  try {
    const files = await fs.readdir(folder);
    if (!files.includes(file)) {
      throw new Error('FS operation failed');
     } else {
      await fs.unlink(path.join(folder, file));
      console.log(`File deleted`);
    }    
  } catch (error) {
    console.log(error)
  }
};

await remove();
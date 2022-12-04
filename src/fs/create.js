import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const file = 'fresh.txt';
  const text = 'I am fresh and young';

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const folder = path.join((__dirname, 'files'));
  
  try {
    const files = await fs.readdir(folder);
    if (files.includes(file)) {
      throw new Error('FS operation failed');
    } else {
      await fs.writeFile(path.join(folder, file), text);
      console.log('File created');
    }
  } catch (error) {
      console.log(error);
  };
};


await create();

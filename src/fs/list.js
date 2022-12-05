import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const folder = path.join((__dirname, 'files'));
  try {
    const files = await fs.readdir(folder)
    console.log(files);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('FS operation failed')
    };
  };
};

await list();
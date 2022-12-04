import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
   const __filename = fileURLToPath(import.meta.url);
   const __dirname = path.dirname(__filename);
   const folder = path.join(__dirname, 'files');
   const newFolder = path.join(__dirname, 'files_copy');

   try {
    await fs.access(newFolder);
     throw new Error('FS operation failed')
    } catch (error) {
      if (error.code === 'ENOENT') {
        await fs.mkdir(newFolder);
        const files = await fs.readdir(folder);
        for (let file of files) {
          await fs.copyFile(path.join(folder, file), path.join(newFolder, file))
        };
        console.log('Files copied')
      } else {
        console.log(error)
      }
    } 
}


copy();
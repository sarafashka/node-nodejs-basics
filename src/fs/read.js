import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const file = 'fileToRead.txt';
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const folder = path.join(__dirname, 'files');
    
    try {
      const files = await fs.readdir(folder); 
      if (!files.includes(file)) {
        throw new Error('FS operation failed');
      } else {
        const text = await fs.readFile(path.join(folder, file));
        console.log(text.toString()); 
       }; 
    } catch (error) {
      console.log(error)
    }      
};

await read();
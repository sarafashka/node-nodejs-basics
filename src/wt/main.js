import { cpus } from 'os';
import { Worker } from 'worker_threads';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirnameOfWorker = path.join(__dirname, 'worker.js');

const performCalculations = async () => {
  const countOfCores = cpus();
  let number = 10;

  const resultOfCalculations = await Promise.allSettled(countOfCores.map(() => {
    return new Promise((resolve, reject) => {
      number += 1;
      const worker = new Worker(dirnameOfWorker, { workerData: number });
      worker.on('message', (data) => resolve(data));
      worker.on('error', (data) => reject((data)));
    })
  }));


  const formattedResult = resultOfCalculations.map(({status, value}) => {
    const formattedResult = {
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: status === 'fulfilled' ? value : null,
    };
  
    return formattedResult;
  });

  console.log(formattedResult)

};

await performCalculations();
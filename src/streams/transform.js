import { Transform } from 'stream'; 

const transform = async () => {
  const myTransform = new Transform({
    transform(chunk, encoding, callback) {
      try {
        const resultString = `${chunk.toString('utf8').split('').reverse().join('')}`
        callback(null, resultString);
      } catch (err) {
        callback(err);
      }
    },
  });
  process.stdin.pipe(myTransform).pipe(process.stdout);
};

await transform();
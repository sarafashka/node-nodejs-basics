const parseArgs = () => {
  const argsParsing = [];
  process.argv
    .slice(2)
    .forEach((arg, index, array) => {
      const nextArg = array[index + 1];
      if (arg.startsWith('--') && nextArg) {
        const argFormated = `${arg.slice(2)} is ${nextArg}`
        argsParsing.push(argFormated);
      }
    });
  
  console.log(argsParsing.join(', '))
};

parseArgs();
const parseEnv = () => {
    const rssVar = Object.entries(process.env).filter((variable) => variable[0].startsWith('RSS_'));
    const rssVarFormated = rssVar.map((variable) => `${variable[0]}=${variable[1]}`).join('; ');
    console.log(rssVarFormated)
};

parseEnv();

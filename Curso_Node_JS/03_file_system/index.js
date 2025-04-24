let {readFile, writeFile} = require('fs');

readFile('arquivo.txt', 'utf-8', (error, texto) => {
   if(error){
    throw error;
   }else{
    console.log(texto);
   }
});

writeFile('arquivo.txt', 'Novo texto', (error) => {

    if(error){
        throw error;
    }else{
        console.log('Arquivo criado com sucesso!');
    }
});
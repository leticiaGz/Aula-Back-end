(async()=>{
    const bd =require('./bd.js');
    const livros= require('./livrosDao.js');

    //apenas printando o comando
    console.log('Criando a tabela');
    const result0=await bd.estruturese(); //fazendo o create atraves da classe bd
    console.log(result0);

    // fazendo os inserts
    console.log( 'A Republica (Platão)');
    const result1=await livros.inclua({codigo:1, nome: 'A Republica (Platão)',preço: 77.77});
    console.log(result1);

    console.log('O principe (Nicola Maquiavel)');
    const result2=await livros.inclua({codigo:2, nome: 'O principe (Nicola Maquiavel)',preço: 33.33});
    console.log(result2);

    console.log('A Condiçao humana (Hannah Arrend)');
    const result3=await livros.inclua({codigo:3, nome: 'A Condiçao humana (Hannah Arrend)',preço: 55.55});
    console.log(result3);

    console.log('Ser e tempo (Martin)');
    const result4=await livros.inclua({codigo:4, nome: 'Ser e tempo (Martin)',preço: 66.66});
    console.log(result4);

    console.log('Critica da razao pura (Imanuel kant)');
    const result5=await livros.inclua({codigo:5, nome: 'Critica da razao pura (Imanuel kant)',preço: 22.22});
    console.log(result5);

    console.log('A Politica (Aristotelis)');
    const result6=await livros.inclua({codigo:6, nome: 'A Politica (Aristotelis)',preço: 44.44});
    console.log(result6);

    // Fazendo Selects

    console.log('retornando livro de codigo 4');
    const result7=await livros.recupereUm(4);
    console.log(result7);

    console.log('retornando todos os livros');
    const result8=await livros.recupereTodos();
    console.log(result8);

    //Atualizaçao
    console.log('Atualizaçao');
    const result9=await livros.atualize({codigo: 4, nome:'Ser e tempo (Martin Heidgger)', preço: 88.88});
    console.log(result9);

    console.log('Vendo se o preço foi atualizado');
    const result10=await livros.recupereUm(4);
    console.log(result10);

    //Deletando
    console.log('Deletando');
    const result11=await livros.remova(4);
    console.log(result11);

    console.log('Vendo se foi deletado');
    const result12=await livros.recupereUm(4);
    console.log(result12);

    process.exit(1); 

})();
(async()=>{
    const bd =require('./bd.js');
    const livros= require('./livrosDao.js');

    //apenas printando o comando
    console.log('Criando a tabela');
    const result0=await bd.estruturese(); //fazendo o create atraves da classe bd

    if (result0===null) {
        console.log('Sem conexão com o BD'); // caso o resultado venha null é pq nao conectou com o bd
    } 
    else if (result0===false) {
        console.log('Erro ao executar o comando'); // caso o resultado venha false é pq nao coseguiu executar o comando
    }
    else {
        console.log('sucesso!!')
    }

    // fazendo os inserts
    console.log( 'A Republica (Platão)');
    const result1=await livros.inclua({codigo:1, nome: 'A Republica (Platão)',preço: 77.77});

    if (result1===null) {
        console.log('Sem conexão com o BD'); 
    } 
    else if (result1===false) {
        console.log('Erro ao executar o comando'); 
    }
    else {
        console.log('sucesso!!')
    }
   

    console.log('O principe (Nicola Maquiavel)');
    const result2=await livros.inclua({codigo:2, nome: 'O principe (Nicola Maquiavel)',preço: 33.33});
    
    if (result2===null) {
        console.log('Sem conexão com o BD'); 
    } 
    else if (result2===false) {
        console.log('Erro ao executar o comando'); 
    }
    else {
        console.log('sucesso!!')
    }

    console.log('A Condiçao humana (Hannah Arrend)');
    const result3=await livros.inclua({codigo:3, nome: 'A Condiçao humana (Hannah Arrend)',preço: 55.55});

    if (result3===null) {
        console.log('Sem conexão com o BD'); 
    } 
    else if (result3===false) {
        console.log('Erro ao executar o comando'); 
    }
    else {
        console.log('sucesso!!')
    }

    console.log('Ser e tempo (Martin)');
    const result4=await livros.inclua({codigo:4, nome: 'Ser e tempo (Martin)',preço: 66.66});
    if (result4===null) {
        console.log('Sem conexão com o BD'); 
    } 
    else if (result4===false) {
        console.log('Erro ao executar o comando'); 
    }
    else {
        console.log('sucesso!!')
    }

    console.log('Critica da razao pura (Imanuel kant)');
    const result5=await livros.inclua({codigo:5, nome: 'Critica da razao pura (Imanuel kant)',preço: 22.22});

    if (result5===null) {
        console.log('Sem conexão com o BD'); 
    } 
    else if (result5===false) {
        console.log('Erro ao executar o comando'); 
    }
    else {
        console.log('sucesso!!')
    }

    console.log('A Politica (Aristotelis)');
    const result6=await livros.inclua({codigo:6, nome: 'A Politica (Aristotelis)',preço: 44.44});

    if (result6===null) {
        console.log('Sem conexão com o BD'); 
    } 
    else if (result6===false) {
        console.log('Erro ao executar o comando'); 
    }
    else {
        console.log('sucesso!!')
    }

    // Fazendo Selects

    console.log('retornando livro de codigo 4');
    const result7=await livros.recupereUm(4);
   
    if (result7===null) {
        console.log('Sem conexão com o BD'); 
    } 
    else if (result7===false) {
        console.log('Erro ao executar o comando'); 
    }
    else {
        console.log(result7);
    }

    console.log('retornando todos os livros');
    const result8=await livros.recupereTodos();
   
    if (result8===null) {
        console.log('Sem conexão com o BD'); 
    } 
    else if (result8===false) {
        console.log('Erro ao executar o comando'); 
    }
    else {
        console.log(result8);
    }

    //Atualizaçao
    console.log('Atualizaçao');
    const result9=await livros.atualize({codigo: 4, nome:'Ser e tempo (Martin Heidgger)', preço: 88.88});

    if (result9===null) {
        console.log('Sem conexão com o BD'); 
    } 
    else if (result9===false) {
        console.log('Erro ao executar o comando'); 
    }
    else {
        console.log('sucesso!!')
    }

    console.log('Vendo se o preço foi atualizado');
    const result10=await livros.recupereUm(4);
    
    if (result10===null) {
        console.log('Sem conexão com o BD'); 
    } 
    else if (result10===false) {
        console.log('Erro ao executar o comando'); 
    }
    else {
        console.log(result10)
    }

    //Deletando
    console.log('Deletando');
    const result11=await livros.remova(4);

    if (result11===null) {
        console.log('Sem conexão com o BD'); 
    } 
    else if (result11===false) {
        console.log('Erro ao executar o comando'); 
    }
    else {
        console.log('sucesso!!');
    }

    console.log('Vendo se foi deletado');
    const result12=await livros.recupereUm(4);

    if (result12===null) {
        console.log('Sem conexão com o BD'); 
    } 
    else if (result12===false) {
        console.log('Erro ao executar o comando'); 
    }
    else {
        console.log(result12);
    }

    process.exit(1); 

})();
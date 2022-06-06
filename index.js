let mysql=require('mysql2');
let bdConfig= require('./bdconfig.js'); // requisitando o modulos

let conexao=mysql.createConnection(bdConfig);
conexao.connect();
console.log('cheguei aqui');

conexao.query('select * from cores',function (error,results,fields) {
    if (error) 
    {
        console.log('Erro ao executar o comando sql')
    }
    else
    {
        for (let i = 0; i < results.length; i++) { // se select
            console.log(results[i].id,results[i].nome); // printando os resultados
            
        }
    }
    
});
conexao.end();

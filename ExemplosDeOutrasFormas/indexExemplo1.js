
// essa nao é a melhor forma de fazer pois deixa a senha explicita

let mysqlex=require('mysql2'); // requisita um modulo 
let conexao=mysqlex.createConnection({
    host: '',
    user: '',
    password: '',
    database:''});
    conexao.connect(); // realizando a conexao
    // pelo fato do node.js ser assincrono,devemos realizar a conexao do banco antes de prosseguir
    //nesse exemplo vamos utilizar callback functions
    conexao.query('comandosql',function (error,results,fields) {
        if (error) {console.log('comando que trata erro')}
        else{
            for (let i = 0; i < results.length; i++) { // se select
                console.log(results[i].col1,...results[i].coln);// percorrendo todos os resultados
                
            }
        }
        
    });
    conexao.end();//fechando a conexao

    // Segunda maneira de realizar a conexao
    
    // em vez de passar um obj passar direto
    let conexaoo=mysqlex.createConnection('mysql://usuario:senha@servidor/bd?debug=true&'+
    'charset=UTF8&timezone=-0300');
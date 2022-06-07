async function getConexao() {  

    //verifico se a conexao ja foi estabelecida, caso ja tenha sido apenas retorno ela
    if (global.conexao && global.conexao.state!== 'disconnected') {
        return global.conexao;
    }

    const mysql2= require('mysql2/promise'); 
    const bdConfig= require('./bdconfig.js'); 

    const conexao = await mysql2.createConnection(bdConfig); //ele retorna uma promessie do propio pacote do sql
    global.conexao = conexao;
    return conexao;

}

async function estruturese() {
    const conexao= await getConexao(); //Como getConexao é uma funçao async sempre usar await

    const sql = 'CREATE TABLE  livros (codigo TINYINT UNSIGNED, nome VARCHAR(60) NOT NULL, preço FLOAT NOT NULL, PRIMARY KEY (codigo))';
    return await conexao.query(sql); // usando await por conta da promessie
    
}

module.exports={getConexao,estruturese} // Exportando funçoes que desejamos utilizar em outro arquivo

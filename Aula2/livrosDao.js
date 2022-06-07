const bd=require ('./bd.js'); //bd é o modulo onde esta a nossa conexao

async function inclua(livro) {
    const conexao= await bd.getConexao();
    const sql= 'INSERT INTO livros (codigo,nome,preço) VALUES (?,?,?)';
    const dados= [livro.codigo,livro.nome,livro.preço];

    //Metodo query é async
    return await conexao.query (sql,dados);
    
    //Importante realizar os comandos sql dessa maneira, para evitar que usuarios maliciosos nos prejudiquem
}

async function atualize (livro) {

    const conexao= await bd.getConexao();
    const sql= 'UPDATE livros SET nome=?,preço=? WHERE codigo=?';
    const dados= [livro.nome,livro.preço,livro.codigo];

    
    return await conexao.query (sql,dados);
}

async function remova(codigo) {

    const conexao= await bd.getConexao();

    const sql= 'DELETE FROM livros WHERE codigo=?';
    const dados= [codigo];

    
    return await conexao.query (sql,dados);
}

async function recupereUm(codigo) {

    const conexao= await bd.getConexao();

    const sql= 'SELECT * FROM livros WHERE codigo=?';
    const dados= [codigo];
    const [linhas]= await conexao.query (sql,dados); 

    
    return linhas;
}
async function recupereTodos() {

    const conexao= await bd.getConexao();

    const sql= 'SELECT * FROM livros';
    const [linhas]= await conexao.query (sql); 

    
    return linhas;
}
module.exports={inclua,atualize,remova,recupereUm,recupereTodos};
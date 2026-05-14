import express from 'express';
//comando para importar o express que foi instalado no cmd
import connectDB from './config/dbConnect.js';
//conexão com o banco de dados, importando a função connectDB do arquivo dbConnect.js

const conexaoDB = await connectDB();
//variavel para armazenar a conexão com o banco de dados, usando a função connectDB que retorna a conexão

conexaoDB.on("error", (error)=>{
    console.error("Erro de conexão", error);
});

conexaoDB.once("open", () =>{
    console.log("Conexao com o banco de dados estabelecida com sucesso!");
});

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "Ultimo romantico",
        descricao: "Livro bom"
    },
    {
        id: 2,
        titulo: "Sabidao dos anjos",
        descricao: "Livro interessante"

    }
]

//Função responsavel por buscar um livro especifico, ela recebe o id do livro como parametro e retorna o livro correspondente
function buscadorLivros(id) {
    return livros.findIndex(livros => {
        return livros.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de NodeJs");
});


app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

//Rota para acessar um livro especifico , isso acontece via ID(EX: livro/1)
app.get("/livros/:id", (req, res) => {
    const index = buscadorLivros(req.params.id);
    res.status(200).json(livros[index]);
});

//rota para criar um POST
app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado!");
    //codigo 201 é que foi criado algo novo, nesse caso um livro novo
});

//Rota para atualizar um livro especificio(PUT)
app.put("/livros/:id", (req, res) => {
    const index = buscadorLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    //abaixo metodo para atualizar a descrição do livro
    livros[index].descricao = req.body.descricao;
    res.status(200).json(livros);
});

//Rota para deletar um livro especificio(DELETE)
app.delete("/livros/:id", (req, res) =>{
    const index = buscadorLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro deletado!");
});

export default app;
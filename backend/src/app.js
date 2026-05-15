//------------ Metodos Importados ------------
import express from 'express';
import connectDB from './config/dbConnect.js';
import livro from './models/livros.js';
//--------------------------------------------

const conexaoDB = await connectDB();
conexaoDB.on("error", (error)=>{
    console.error("Erro de conexão", error);
});
conexaoDB.once("open", () =>{
    console.log("Conexao com o banco de dados estabelecida com sucesso!");
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Curso de NodeJs");
});


app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
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
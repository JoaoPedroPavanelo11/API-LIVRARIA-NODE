import express from 'express';
//comando para importar o express que foi instalado no cmd

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "Ultimo romantico"
    },
    {
        id: 2,
        titulo: "Sabidao dos anjos"
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

export default app;
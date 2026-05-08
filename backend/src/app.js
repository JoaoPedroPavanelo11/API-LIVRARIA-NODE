import express from "express";
//comando para importar o express que foi instalado no cmd

const app = express();

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

app.get("/", (req, res) => {
    res.status(200).send("Curso de NodeJs");
});


app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

export default app;
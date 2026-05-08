import http from "http";

const PORT = 3000;
//Criei uma const porta que será a porta de acesso

const rotas = {
    "/": "Curso de NodeJS",
};

// Criando o servidor HTTP , acima eu importei o modulo http que o node tem
const server = http.createServer((req , res) => {
    res.writeHead(200, { "Content-type": "text/plain"});
    res.end("Curso de NodeJS");
});

server.listen(PORT, () => {
    console.log("Servidor rodando ");
});
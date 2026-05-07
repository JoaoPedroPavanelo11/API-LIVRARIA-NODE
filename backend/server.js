import http from "http";

// Criando o servidor HTTP , acima eu importei o modulo http que o node tem
const server = http.createServer((req , res) => {
    res.writeHead(200, { "Content-type": "text/plain"});
    res.end("Curso de NodeJS");
});


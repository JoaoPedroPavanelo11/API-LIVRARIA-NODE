//------------ Metodos Importados ------------
import express from 'express';
import connectDB from './config/dbConnect.js';
import routers from './rotas/index.js';
//--------------------------------------------

const conexaoDB = await connectDB();
conexaoDB.on("error", (error)=>{
    console.error("Erro de conexão", error);
});
conexaoDB.once("open", () =>{
    console.log("Conexao com o banco de dados estabelecida com sucesso!");
});

const app = express();
routers(app);

export default app;
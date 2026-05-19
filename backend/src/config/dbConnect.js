import mongoose from 'mongoose';
import dns from "dns";
import { error } from 'console';
//Importei o DNS por motivo de erro em que o banco de dados nao estava conectando com o servidor , solução foi o DNS
dns.setServers(["1.1.1.1","8.8.8.8"])

async function connectDB() {

    await mongoose.connect(
        process.env.DB_CONECTION_STRING
    );

    return mongoose.connection;
}

export default connectDB;
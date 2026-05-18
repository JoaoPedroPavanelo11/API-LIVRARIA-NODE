import mongoose from 'mongoose';
import dns from "dns";
import { error } from 'console';
//Importei o DNS por motivo de erro em que o banco de dados nao estava conectando com o servidor , solução foi o DNS
dns.setServers(["1.1.1.1","8.8.8.8"])

async function connectDB() {

    await mongoose.connect(
        "mongodb+srv://joaopedropavanelo_db_user:jpp260208@cluster0.4ubbw9k.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0",
        {
            dbName: "livraria"
        }
    );

    return mongoose.connection;
}

export default connectDB;
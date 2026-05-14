import mongoose from 'mongoose';
import dns from "dns";
//Importei o DNS por motivo de erro em que o banco de dados nao estava conectando com o servidor , solução foi o DNS
dns.setServers(["1.1.1.1","8.8.8.8"])

async function connectDB(){
    //String de conexção do MongoDB, substitua <db_password> pela senha do seu usuário do MongoDB Atlas.
    mongoose.connect("mongodb+srv://joaopedropavanelo_db_user:jpp260208@cluster0.4ubbw9k.mongodb.net/livros?appName=Cluster0");
    
    return mongoose.connection;
};

export default connectDB;
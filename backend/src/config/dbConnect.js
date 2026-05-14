import mongoose from 'mongoose';


async function connectDB(){
    //String de conexção do MongoDB, substitua <db_password> pela senha do seu usuário do MongoDB Atlas.
    mongoose.connect("mongodb+srv://joaopedropavanelo_db_user:jpp260208@cluster0.4ubbw9k.mongodb.net/livraria?appName=Cluster0");
    
    return mongoose.connection;
};

export default connectDB;
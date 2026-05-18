import mongoose from "mongoose";

//Schema do livro, onde serão definidos os campos e seus tipos
const livrosSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    titulo: {type: mongoose.Schema.Types.String, required: true},
    editora: {type: mongoose.Schema.Types.String},
    preco: {type: mongoose.Schema.Types.Number},
    paginas: {type: mongoose.Schema.Types.Number},
}, {versionKey: false});

const livros = mongoose.model("livros", livrosSchema);

export default livros;
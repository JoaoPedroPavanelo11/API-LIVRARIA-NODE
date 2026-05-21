import livro from "../models/livros.js";

class LivroController {
    //Método para listar os livros
    static async listarLivros (req, res){
        try{
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - falha ao listar livros`});
        };
    };

    //Método para listar os livros por id
     static async listarLivrosPorId (req, res){
        try{
            const id = req.params.id;
            const listaLivros = await livro.findById(id);
            res.status(200).json(listaLivros);
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - falha ao listar livros`});
        };
    };

    //Método para cadastrar um livro
    static async cadastrarLivro (req, res){
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message : "Criado com sucesso!", livro: novoLivro});
        }catch(erro) {
            res.status(500).json({ message: `${erro.message} - falha ao criar livro`});
        }
    };

    //Método para deletar livro
    static async deletarLivro (req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro deletado com sucesso!"});
        }catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao deletar livro`});
        }
    };

    //Método para atualizar livro
    static async atualizarLivro (req, res){
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro atualizado com sucesso!"});
        }catch (erro){
            res.status(500).json({ message: `${erro.message} - falha ao atualizar livros`});
        };
    };
};

export default LivroController;
import express from "express";
import LivroController from "../controller/livroController.js";

const router = express.Router();

//Rota para acessar qualquer livros
router.get("/livros", LivroController.listarLivros);

router.get("/livros/:id", LivroController.listarLivrosPorId);

router.post("/livros", LivroController.cadastrarLivro);

router.put("/livros/:id", LivroController.atualizarLivro);

router.delete("/livros/:id", LivroController.deletarLivro);

export default router;
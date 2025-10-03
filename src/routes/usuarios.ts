import { Router } from "express";
import db from "../client/db";

const router = Router();
export const usuariosRoutes = Router();

// Exercicio de CRUD
// Utilizando as 5 funções encontradas em db, crie 5 endpoints para o recurso "usuario".
// (Leia em README para saber mais sobre as funções)
/*
    O recurso usuario deve ter as seguintes propriedades com seus respectivos tipos:
    {
    
        name: String,
        email: String,
        password: String
    }

*/


const create = (req, res) => {
    const user = req.body;
    const newUser = db.create(user);
    res.json(newUser);
};

const findAllById = (req, res) => {
    const users = db.findAll();
    res.json(users);
}

const findOneById = (req, res) => {
    const id = Number(req.params.id);
    const user = db.findById(id);
    res.json(user);
}

const updateOneById = (req, res) => {
    const id = Number(req.params.id);
    const user = req.body;
    const updatedUser = db.updateById(id, user);
    res.json(updatedUser);
}

const removeById = (req, res) => {
    const id = Number(req.params.id);
    db.remove(id);
    res.json({ message: "removido com sucesso!" });
}

usuariosRoutes.post("/", create);
usuariosRoutes.get("/", findAllById);
usuariosRoutes.get("/:id", findOneById);
usuariosRoutes.put("/:id", updateOneById);
usuariosRoutes.delete("/:id", removeById);

      
export default router;


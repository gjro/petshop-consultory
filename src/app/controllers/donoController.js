import Dono from "../models/dono";

class donosControllers {
    //Listagem dos donos
    async index(req, res) {
        const data = await Dono.findAll({
            limit: 1000,
        });

        res.json(data);
    }

    //Recuperar Dono
    async show(req, res) {
        try {
            const id = parseInt(req.params.id);
            const dono = await Dono.findByPk(id);
            const status = dono ? 200 : 404;

            return res.status(status).json(dono);
        } catch (e) {
            console.log("Error: " + e);
        }
    }

    //Criar Dono
    async create(req, res) {
        try {
            const { nome, CPF, telefone } = req.body;
            const novoDono = await Dono.create({
                nome,
                CPF,
                telefone,
            });

            return res.status(201).json(novoDono);
        } catch (e) {
            console.log("Error ao inserir: " + e);
        }
    }

    //Atualizar Dono
    async update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { nome, CPF, telefone } = req.body;

            const retornoStatus = id >= 0 ? 200 : 400;

            const dono = await Dono.findByPk(id);
            const novoDono = await dono.update({
                nome,
                CPF,
                telefone,
            });

            return res.status(retornoStatus).json(novoDono);
        } catch (e) {
            console.log("Error: " + e);
        }
    }

    //Excluir Dono
    destroy(req, res) {
        try {
            const id = parseInt(req.params.id);
            const dono = await Dono.findByPk(id);
            const status = id >= 0 ? 200 : 404;

            dono.destroy();

            return res.status(status);
        } catch (e) {
            console.log("Error: " + e);
        }
    }
}

export default new donosControllers();

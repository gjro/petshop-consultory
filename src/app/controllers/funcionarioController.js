import Funcionario from "../models/funcionario";

class funcionarioControllers {
    //Listagem da empresas
    async index(req, res) {
        const data = await Funcionario.findAll({
            limit: 1000,
        });

        res.json(data);
    }

    //Recuperar empresa
    async show(req, res) {
        try {
            const id = parseInt(req.params.id);
            const funcionario = await Funcionario.findByPk(id);
            const status = funcionario ? 200 : 404;

            return res.status(status).json(funcionario);
        } catch (e) {
            console.log("Error: " + e);
        }
    }

    //Cria empresa
    async create(req, res) {
        try {
            const { nome, CPF, Cargo } = req.body;
            const novoFuncionario = await Funcionario.create({
                Nome,
                CPF,
                Cargo,
            });

            return res.status(201).json(novoFuncionario);
        } catch (e) {
            console.log("Error ao inserir: " + e);
        }
    }

    //Atualizar Funcionario
    async update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { nome, CPF, Cargo } = req.body;

            const retornoStatus = id >= 0 ? 200 : 400;

            const funcionario = await Funcionario.findByPk(id);
            const novoFuncionario = await empresa.update({
                Nome,
                CPF,
                Cargo,
            });

            return res.status(retornoStatus).json(novoFuncionario);
        } catch (e) {
            console.log("Error: " + e);
        }
    }

    //Excluir empresa
    async destroy(req, res) {
        try {
            const id = parseInt(req.params.id);
            const empresa = await Funcionario.findByPk(id);
            const status = id >= 0 ? 200 : 404;

            empresa.destroy();

            return res.status(status);
        } catch (e) {
            console.log("Error: " + e);
        }
    }
}

export default new funcionarioControllers();

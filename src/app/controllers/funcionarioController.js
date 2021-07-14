import Funcionario from "../models/funcionario";

<<<<<<< HEAD


class funcionarioControllers{
    //Listagem de Funcionairos  
    async index(req,res){

=======
class funcionarioControllers {
    //Listagem da empresas
    async index(req, res) {
>>>>>>> 122b6b976a0dbf353144976b5e071deeb20907e5
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

<<<<<<< HEAD
    //Cria Funcionairo  
    async create(req,res){
      try{
        const {nome,CPF,Cargo} = req.body
        const novoFuncionario = await Funcionario.create({
            Nome,CPF,Cargo
        }) 

        return res.status(201).json(novoFuncionario)
      }catch(e){
        console.log("Error ao inserir: " + e)
      }
=======
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
>>>>>>> 122b6b976a0dbf353144976b5e071deeb20907e5
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

<<<<<<< HEAD
    //Excluir Funcionairo    
    destroy(req,res){
        try{
            const id = parseInt(req.params.id)
            const empresa = await Funcionario.findByPk(id)
            const status = id >= 0 ? 200 : 404 
=======
    //Excluir empresa
    async destroy(req, res) {
        try {
            const id = parseInt(req.params.id);
            const empresa = await Funcionario.findByPk(id);
            const status = id >= 0 ? 200 : 404;
>>>>>>> 122b6b976a0dbf353144976b5e071deeb20907e5

            empresa.destroy();

            return res.status(status);
        } catch (e) {
            console.log("Error: " + e);
        }
    }
}

export default new funcionarioControllers();

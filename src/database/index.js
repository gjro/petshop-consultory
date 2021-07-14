<<<<<<< HEAD
import sequelize from "sequelize";
import config from "../config/database";

import Consulta from "../app/models/consulta";
import Dono from "../app/models/dono";
import Funcionario from "../app/models/funcionario";
import Pet from "../app/models/pet";


const consultas = [Consulta];
const donos = [Dono];
const funcionarios = [Funcionario];
const pets = [Pet];

class Database{
    constructor(){
        this.connection = new sequelize(config);
        this.init();
    }

    init(){
        consultas.forEach(consulta => consulta.init(this.connection));
        donos.forEach(dono => dono.init(this.connection));
        funcionarios.forEach(funcionario => funcionario.init(this.connection));
        pets.forEach(pet => pet.init(this.connection));
    }
}


export default new Database();
=======
import { Sequelize } from "sequelize";

import config from "../config/database";

import Empresa from "../app/models/empresa";
import Usuario from "../app/models/usuario";

const models = [Empresa, Usuario];

class Database {
    constructor() {
        this.connection = new Sequelize(config);

        this.init();
    }

    init() {
        models.forEach((model) => model.init(this.connection));
    }
}

export default new Database();
>>>>>>> f48125d4342f64b50b917dc8eb32dd08f20b3f0b

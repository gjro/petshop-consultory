import sequelize from "sequelize";
import config from "../config/database";

import Consulta from "../app/models/consulta";
import Dono from "../app/models/dono";
import Funcionario from "../app/models/funcionario";
import Pet from "../app/models/pet";

const models = [Dono, Pet, Funcionario, Consulta];

class Database {
    constructor() {
        this.connection = new sequelize(config);
        this.init();
    }

    init() {
        models.forEach((model) => model.init(this.connection));
    }
}

export default new Database();

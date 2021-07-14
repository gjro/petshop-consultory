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

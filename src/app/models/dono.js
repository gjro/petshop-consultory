import Sequelize, { Model } from "sequelize";

class Dono extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                cpf: Sequelize.STRING,
                telefone: Sequelize.STRING,
                //status: Sequelize.ENUM("ACTIVE", "ARCHIVED"),
            },
            {
                sequelize,
            }
        );
    }
}

export default Dono;

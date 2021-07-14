import Sequelize, { Model } from "sequelize";

class Pet extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                donoID: Sequelize.INTEGER,
                raca: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
}

export default Pet;

import Sequelize, { Model } from "sequelize";

class Consulta extends Model {
    static init(sequelize) {
        super.init(
            {
                petID: Sequelize.INTEGER,
                funcionarioID: Sequelize.INTEGER,
                custo: Sequelize.FLOAT,
                
            },
            {
                sequelize,
            }
        );
    }
}

export default Consulta;
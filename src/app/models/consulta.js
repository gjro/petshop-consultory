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
    static associate(models){
        this.belongsTo(models.Dono, {foreignKey: "donoid"}) // dono
        this.belongsTo(models.Pet, {foreignKey:"petID"}) // pet
    }
}

export default Consulta;
import Sequelize,{Model} from "sequelize";

class Funcionario extends Model {
    static init(sequelize){
        super.init(
            {
                nome: Sequelize.STRING,
                CPF: Sequelize.STRING,
                Cargo: Sequelize.STRING,
                
            },
            {
                sequelize,
            }
        )
    }
}

export default Funcionario;
"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("consultas", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            pet_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "pets",
                    key: "id",
                },
                onUpdate:"CASCADE",
                onDelete:"CASCADE"
            },
<<<<<<< HEAD
            funcionario_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "funcionarios",
                    key: "id",
                },
=======
            funcionarioID: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                  model: "funcionarios",
                  key: "id",
              },
              onUpdate:"CASCADE",
              onDelete:"CASCADE"
>>>>>>> a378f8d0914e8cfa5eb2c194817f14aaa019e72a
            },
            custo: {
                type: Sequelize.FLOAT,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("consultas");
    },
};

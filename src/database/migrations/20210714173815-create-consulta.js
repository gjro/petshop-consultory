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
            petID: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "pets",
                    key: "id",
                },
                onUpdate:"CASCADE",
                onDelete:"CASCADE"
            },
            funcionarioID: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                  model: "funcionarios",
                  key: "id",
              },
              onUpdate:"CASCADE",
              onDelete:"CASCADE"
            },
            custo:{
              type:Sequelize.FLOAT,
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

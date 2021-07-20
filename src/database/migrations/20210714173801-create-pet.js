"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("pets", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },
<<<<<<< HEAD
            dono_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "donos",
                    key: "id",
                },
            },
=======
>>>>>>> a378f8d0914e8cfa5eb2c194817f14aaa019e72a
            raca: {
                type: Sequelize.STRING,
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
            dono_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "donos",
                    key: "id",
                },
                onUpdate:"CASCADE",
                onDelete:"CASCADE"
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("pets");
    },
};

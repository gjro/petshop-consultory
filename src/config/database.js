module.exports = {
	dialect: "postgres",
	host: "localhost",
	username: "postgres",
	password: "admin",
	database: "petshop",
	define: {
		timestamp: true, //Criado em e Atualizado em
		underscored: true, //Padrão '_' para separação
		underscoredAll: true,
	},
};

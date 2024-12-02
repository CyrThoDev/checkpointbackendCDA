import { DataSource } from "typeorm";

export const datasource = new DataSource({
	type: "sqlite",
	database: "database.sqlite",
	synchronize: true,
	entities: ["src/entities/*.ts"],
});

import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { datasource } from "./datasource";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { countryResolvers } from "./resolvers/countryResolvers";
import { Country } from "./entities/Country";

const port = 4000;

export async function cleanDB() {
	await datasource.manager.clear(Country);
}
export async function startApolloServer() {
	try {
		const schema = await buildSchema({
			resolvers: [countryResolvers],
		});
		const server = new ApolloServer({ schema });
		await datasource.initialize();
		// cleanDB();
		console.log("datasource initialized");
		const { url } = await startStandaloneServer(server, {
			listen: { port },
		});
		console.log(`🚀  Server ready at: ${url}`);
	} catch (error) {
		console.error("Error starting server:", error);
	}
}

startApolloServer();

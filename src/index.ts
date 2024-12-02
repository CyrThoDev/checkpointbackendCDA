import { buildSchema } from "type-graphql";
import { datasource } from "./datasource";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const port = 4000;
export async function startApolloServer() {
	try {
		const schema = await buildSchema({
			resolvers: [],
		});
		const server = new ApolloServer({ schema });
		await datasource.initialize();
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

import { datasource } from "./datasource";
console.log("Hello");

export async function start() {
	try {
		await datasource.initialize();
		console.log("datasource initialized");
	} catch (error) {
		console.error("Error initializing datasource", error);
	}
}

start();

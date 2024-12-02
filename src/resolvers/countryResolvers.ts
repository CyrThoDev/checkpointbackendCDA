import { Arg, Mutation, Resolver, Query } from "type-graphql";
import { Country } from "../entities/Country";
import { datasource } from "../datasource";

@Resolver(Country)
export class countryResolvers {

// Query to get all countries

@Query((type) => [Country])
async getAllCountries(): Promise<Country[]> {
	const countries: Country[] = await datasource.manager.find(Country);
	return countries;
}


	// Mutation to create a country 
	@Mutation((_) => Country)
	async createCountry(
    @Arg("code") code :string, 
    @Arg("name") name :string, 
    @Arg("emoji") emoji :string, 
  ): Promise<Country> {
		try {
			const newCountry = new Country(code, name, emoji);
			await datasource.manager.save(newCountry);
			return newCountry;
		} catch (error) {
			console.info(error);
			throw new Error("Invalid information");
		}
	}
}
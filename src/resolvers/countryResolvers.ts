import { Arg, Mutation, Resolver, Query } from "type-graphql";
import { Country } from "../entities/Country";
import { datasource } from "../datasource";
import { CountryInputType } from "../types/CountryInputType";

@Resolver(Country)
export class countryResolvers {

// Query to get all countries

@Query(() => [Country])
async getAllCountries(): Promise<Country[]> {
	const countries: Country[] = await datasource.manager.find(Country);
	return countries;
}

// Query to get a country when specifying a the country code 

@Query(() => [Country])
async getCountriesByContinent(@Arg("continent") continent :string): Promise<Country[]> {
	const countriesbyContinent: Country[] = await datasource.manager.findBy(Country, {continent});
	return countriesbyContinent;
}

// Query to get all countries when specifying a continent 

@Query(() => Country)
async getCountryByCode(@Arg("code") code :string): Promise<Country> {
	const country: Country = await datasource.manager.findOneByOrFail(Country, {code});
	return country;
}


	// Mutation to create a country 
	@Mutation((_) => Country)
	async createCountry(
    @Arg("code") code :string, 
    @Arg("name") name :string, 
    @Arg("emoji") emoji :string, 
		@Arg("continent") continent :string, 
  ): Promise<Country> {
		try {
			const newCountry = new Country(code, name, emoji, continent);
			await datasource.manager.save(newCountry);
			return newCountry;
		} catch (error) {
			console.info(error);
			throw new Error("Invalid information");
		}
	}
}

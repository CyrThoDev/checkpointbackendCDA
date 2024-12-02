import { InputType, Field } from "type-graphql";

@InputType()
export class CountryInputType {
	@Field()
	name: string;

	@Field()
	code: string;

	@Field()
	emoji: string;

	@Field()
	continent: string;
}

import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Country extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field(() => ID)
	id?: number;

	@Column()
	@Field()
	code: string;

	@Column()
	@Field()
	name: string;

	@Column()
	@Field()
	emoji: string;

	@Column()
	@Field()
	continent: string;

	constructor(code: string, name: string, emoji: string, continent: string) {
		super();
		this.code = code;
		this.name = name;
		this.emoji = emoji;
		this.continent = continent;
	}
}

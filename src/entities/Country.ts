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
}

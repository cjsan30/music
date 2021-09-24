import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class User {

	@PrimaryGeneratedColumn({
		type: 'int',
		name: 'id'
	})
	id: number

	@Column('varchar', {
		name: 'name',
		nullable: false
	})
	name: string

	@Column('varchar', {
		name: 'email',
		nullable: true
	})
	email: string

	@Column('varchar', {
		name: 'address',
		nullable: false
	})
	address: string

	@Column('int', {
		name: 'phone',
		nullable: true
	})
	phone: number

	@Column('varchar', {
		name: 'sex',
		nullable: false
	})
	sex: boolean

	@Column('int', {
		name: 'age',
		nullable: false
	})
	age: number

	@Column('int', {
		name: 'deposit',
		nullable: true
	})
	deposit: number
    
}
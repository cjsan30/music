import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class UserPet {

	@PrimaryGeneratedColumn({
		type: 'int',
		name: 'id'
	})
    id: number
    
	@Column('varchar', {
		name: 'animal',
		nullable: false
	})
    animal: string

	@Column('int', {
		name: 'user_id',
		nullable: false
	})
    userId: number

	@Column('varchar', {
		name: 'sex',
		nullable: false
	})
    sex: boolean

	@Column('varchar', {
		name: 'color',
		nullable: false
	})
    color: string

	@Column('int', {
		name: 'age',
		nullable: false
	})
    age: number

}

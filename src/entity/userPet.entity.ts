import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./user.entity"

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

	@Column('char', {
		name: 'sex',
		nullable: false
	})
    sex: string

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

	@ManyToOne(() => User)
	@JoinColumn({
		name: "user_id"
	})
    user: User

}

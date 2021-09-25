import { AbstractRepository, EntityRepository, MoreThan } from 'typeorm'
import { User } from '../entity/user.entity'


@EntityRepository(User)
export class UserRepository extends AbstractRepository<User> {
	
	/**
	 * receive parameter id and return user id from User table
	 * @param id 
	 * @returns 
	 */
	public async findUser(id: number): Promise<User> {
		return await this.repository.findOne({
			where: {
				id: id
			}
		})
	}

	/**
	 * insert user infor to User Table
	 * @param user 
	 * @returns 
	 */
	public async insertUser(user: User): Promise<User> {
		return await this.repository.save(user)
	}

	/**
	 * return user id where sex is T
	 * @returns 
	 */
	public async findUserIdMale(): Promise<User[]> {
		return await this.repository.find({
			where: {
				sex: 'T'
			}
		})
	}
}

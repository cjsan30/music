import { AbstractRepository, EntityRepository } from "typeorm";
import { User } from "../entity/user.entity";

@EntityRepository(User)
export class UserRepository extends AbstractRepository<User> {
	
	/**
	 * id값을 입력받아 User 테이블에서 조회한 값을 반환.
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
	 * User 타입의 user를 입력받아 테이블에 Insert
	 * @param user 
	 * @returns 
	 */
	public async insertUser(user: User): Promise<User> {
		return await this.repository.save(user)
	}

	/**
	 * Table에서 sex가 T인 user id를 반환
	 * @returns 
	 */
	public async findUserIdMale(): Promise<User[]> {
		return await this.repository.find({
			where: {
				sex: "T"
			}
		})
	}
}

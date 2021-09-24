import { AbstractRepository, EntityRepository } from "typeorm";
import { User } from "../entity/user.eneity";

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
}

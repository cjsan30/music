import { AbstractRepository, EntityRepository } from "typeorm";
import { UserPet } from "../entity/user_pet.entity"

@EntityRepository(UserPet)
export class UserRepository extends AbstractRepository<UserPet> {
    
    /**
     * receive parameter id and return pet id from Pet table
     * @param id 
     * @returns 
     */
    public async findUserPet(id: number): Promise<UserPet> {
		return await this.repository.findOne({
			where: {
				id: id
			}
		})
	}

    /**
     * insert pet infor to Pet table
     * @param userPet 
     * @returns 
     */
    public async insertUserPet(userPet: UserPet): Promise<UserPet> {
        return await this.repository.save(userPet)
    }
}
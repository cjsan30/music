import { AbstractRepository, EntityRepository, MoreThan } from "typeorm"
import { UserPet } from "../entity/user_pet.entity"

@EntityRepository(UserPet)
export class UserPetRepository extends AbstractRepository<UserPet> {
    
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

    /**
     * return pet id where age > 2
     * @returns 
     */
    public async findUserPetAgeMT3(): Promise<UserPet[]> {
        return await this.repository.find({
            where: {
                age: MoreThan(2)
            }
        })
    }
}

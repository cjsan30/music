import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { UserPet } from "../entity/userPet.entity"
import { UserPetRepository } from "../repository/userPet.repository"

@Injectable()
export class UserPetService {

    constructor(
        @InjectRepository(UserPetRepository)
		private readonly userPetRepository: UserPetRepository
    ) { }

    /**
     * call findUserPetAgeMT3 in userPetRepository async
     * @returns 
     */
    public async getUserPetAgeMT3(): Promise<UserPet[]> {
        return await this.userPetRepository.findUserPetAgeMT3()
    }

    /**
     * input param userPet than exeucute insertUserPet 
     * @param userPet 
     * @returns 
     */
    public async insertUserPet(userPet: UserPet): Promise<UserPet> {
        return await this.userPetRepository.insertUserPet(userPet)
    }

    /**
     * input param id than execute findUserPet 
     * @param id 
     * @returns 
     */
    public async getUserPet(id: number): Promise<UserPet[]> {
        return await this.userPetRepository.findUserPet(id)
    }
}

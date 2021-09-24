import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserPet } from "../entity/user_pet.entity";
import { UserPetRepository } from "../repository/user_pet_repository"

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
    public async findUserPetAgeMT3(): Promise<UserPet[]> {
        return await this.userPetRepository.findUserPetAgeMT3()
    }

    
}
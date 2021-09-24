import { Controller, Get, Query } from "@nestjs/common";
import { UserPet } from "../entity/user_pet.entity";
import { UserPetService } from "../service/user_pet_service";


@Controller('/')
export class UserPetController {
    
	constructor (
		private readonly userPetService: UserPetService
	) { }

	/**
	 * input id and convert Number than return getUserPet
	 * @param id 
	 * @returns 
	 */
	@Get('/userpet') 
	public async getUserPet(@Query('id') id): Promise<UserPet> {
		return this.userPetService.getUserPet(Number(id))
	}
}
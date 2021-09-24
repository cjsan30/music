import { Controller, Get, Post, Query, Req } from "@nestjs/common";
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

	/**
	 * input pet infor Post return insertUsePet
	 * @param req 
	 * @returns 
	 */
	@Post('/userpet')
	public async insertUserPet(@Req() req): Promise<UserPet> {
		const userpet = req.body as UserPet
		return this.userPetService.insertUserPet(userpet)
	}
	
	/**
	 * return pet infor where age > 3
	 * @returns 
	 */
	@Get('/userpet/morethan2')
	public async getUserPetAgeMT3(): Promise<UserPet[]> {
		return await this.userPetService.getUserPetAgeMT3()
	}
}
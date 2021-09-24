import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { User } from "../entity/user.entity"
import { UserRepository } from "../repository/user_repository"

@Injectable()
export class UserService {

	constructor(
		@InjectRepository(UserRepository)
		private readonly userRepository: UserRepository
	) { }

	/**
	 * return user Id where sex is T
	 * @returns 
	 */
	public async findUserIdMale(): Promise<User[]> {
		return await this.userRepository.findUserIdMale()
	}
}
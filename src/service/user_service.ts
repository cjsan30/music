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
	public async getUserIdMale(): Promise<User[]> {
		return await this.userRepository.findUserIdMale()
	}

	/**
	 * user를 입력받아 table로 insert
	 * @param user 
	 * @returns 
	 */
	public async insertUser(user: User): Promise<User> {
		return await this.userRepository.insertUser(user)
	}

	/**
	 * receive id and select user_id in User Table
	 * @param id 
	 * @returns 
	 */
	public async getUser(id: number): Promise<User> {
		return await this.userRepository.findUser(id)
	}
}

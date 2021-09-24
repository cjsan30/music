import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRepository } from "../repository/user_repository";

@Injectable()
export class UserService {

	constructor(
		@InjectRepository(UserRepository)
		private readonly userRepository: UserRepository
	) { }
}
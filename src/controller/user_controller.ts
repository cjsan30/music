import { Controller } from "@nestjs/common"
import { UserService } from "../service/user_service"


@Controller('/')
export class UserController {
	
	constructor (
		private readonly userService: UserService
	) { }

	
}
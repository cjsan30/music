import { Controller, Get, Post, Query, Req } from "@nestjs/common"
import { User } from "../entity/user.entity"
import { UserService } from "../service/user_service"


@Controller('/')
export class UserController {
	
	constructor (
		private readonly userService: UserService
	) { }

	/**
	 * Query string으로 id를 입력받고 Number화 하여 getUser로 반환
	 * @param id 
	 * @returns 
	 */
	@Get('/user')
	public async getUser(@Query('id') id): Promise<User> {
		return this.userService.getUser(Number(id))
	}
	
	/**
	 * post 형식으로 user infor를 입력받아 insertUser로 반환
	 * @param req 
	 * @returns 
	 */
	@Post('/user')
	public async insertUser(@Req() req): Promise<User> {
		const user = req.body as User
		return this.userService.insertUser(user)
	}
}

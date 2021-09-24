import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './song.controller'
import { AppService } from './song.service'
import { Song } from './entity/song.entity'
import { SongRepository } from './song.repository'
import { UserController } from './controller/user.controller'
import { UserPetController } from './controller/user_pet.controller'
import { UserService } from './service/user_service'
import { UserPetService } from './service/user_pet.service'
import { User } from './entity/user.entity'
import { UserPet } from './entity/user_pet.entity'
import { UserRepository } from './repository/user_repository'
import { UserPetRepository } from './repository/user_pet.repository'


@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "mysql",
			host: "localhost",
			port: 3306,
			username: "mini",
			password: "ubuntumysql",
			database: "musicdb",
			entities: [ Song, User, UserPet ],
			synchronize: true
		}),
		TypeOrmModule.forFeature([
			SongRepository, UserRepository, UserPetRepository
		]),
	],
	controllers: [AppController, UserController, UserPetController],
	providers: [AppService, UserService, UserPetService],
})
export class AppModule { }

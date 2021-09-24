import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './song.controller'
import { AppService } from './song.service'
import { Song } from './entity/song.entity'
import { SongRepository } from './song.repository'

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: "mysql",
			host: "localhost",
			port: 3306,
			username: "mini",
			password: "ubuntumysql",
			database: "musicdb",
			entities: [ Song ],
			synchronize: true
		}),
		TypeOrmModule.forFeature([
			SongRepository
		])
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }

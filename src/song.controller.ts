import { Controller, Get, Post, Query, Req } from '@nestjs/common'
import { AppService } from './song.service'
import { Song } from './entity/song.entity'

@Controller('/')
export class AppController {
	
	constructor (
		private readonly appService: AppService
	) { }

	@Get('/')
	public getHello(): string {
		return "hello nest";
	}

	@Get('/song')
	public async getSong(@Query('id') id): Promise<Song> {
		return this.appService.getSong(Number(id))
	}

	@Post('/song')
	public async insertSong(@Req() req): Promise<Song> {
		const song = req.body as Song
		return this.appService.insertSong(song)
	}

	@Get('/song/morethan3')
	public async getSongMT3(): Promise<Song[]> {
		return this.appService.getSongIdMT3()
	}
}

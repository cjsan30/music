import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Song } from './entity/song.entity';
import { SongRepository } from './song.repository'

@Injectable()
export class AppService {
	constructor(
		@InjectRepository(SongRepository)
		private readonly songRepository: SongRepository
	) {}
	
	/**
	 * ID가 3보다 큰 음악의 id 반환
	 * @returns 
	 */
	public async getSongIdMT3(): Promise<Song[]> {
		return await this.songRepository.findSongIdMT3()
	}

	public async insertSong(song: Song): Promise<Song> {
		return await this.songRepository.insertSong(song)
	}
	
	public async getSong(id: number): Promise<Song> {
		return await this.songRepository.findSong(id)
	}
}

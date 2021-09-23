import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './entity/song.entity';

@Injectable()
export class AppService {
	constructor(
		@InjectRepository(Song)
		private songsRepository : Repository<Song>,
		// service에서는 inject X
		// 별도 repository 만들기
	) {}


	getHello(): string {
		return 'Welcome 1st nest world';
	}
	
		// 데이터베이스 Song 모든 row를 array 형태로 가져온다.
	getSong(): Promise<Song[]> {
		return this.songsRepository.find();
	}

	// 데이터베이스 Song 에 title을 가져온다.
	getTitle(title: string): Promise<Song> {
		return this.songsRepository.findOne({
			where: {
				title,
			},
		});
	}
		
	saveSong(): string {
		return 'save song';
}  
}

	
	
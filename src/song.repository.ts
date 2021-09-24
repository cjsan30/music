import { AbstractRepository, EntityRepository, MoreThan } from 'typeorm'
import { Song } from './entity/song.entity'

@EntityRepository(Song)
export class SongRepository extends AbstractRepository<Song> {
	
	/**
	 * 매개변수 id를 입력받아 Song 테이블에서 id를 select한다.
	 * @param id 
	 * @returns 
	 */
	public async findSong(id: number): Promise<Song> {
		return await this.repository.findOne({
			where: {
				id: id
			}
		})
	}

	/**
	 * insert song to Song Table
	 * @param song 
	 * @returns 
	 */
	public async insertSong(song: Song): Promise<Song> {
		return await this.repository.save(song)
	}

	/**
	 * finding song id bigger than 3
	 * @returns 
	 */
	public async findSongIdMT3(): Promise<Song[]> {
		return await this.repository.find({
			where: {
				id: MoreThan(3)
			}
		})
	}
}

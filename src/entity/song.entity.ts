import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Song {

	// likeCount Type
	@Column('int', {
		name: 'like_count',
		nullable: true
	})
	likeCount: number

	@PrimaryGeneratedColumn({
		type: 'int',
		name: 'id'
	})
	id: number

	@Column('datetime', {
		name: 'date',
		nullable: true
	})
	date: Date

	@Column('varchar', {
		name: 'singer',
		nullable: true
	})
	singer: string

	@Column('varchar', {
		name: 'title',
		nullable: true
	})
	title: string

	@Column('varchar', {
		name: 'album',
		nullable: true
	})
	album: string

	@Column('datetime', {
		name: 'created_at'
	})
	createdAt: Date

}
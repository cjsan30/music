import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    // typeormmodule 로 mysql 연결
    // forRoot() 만 호출하고 내용은 ormconfig.json 에 포함
    TypeOrmModule.forRoot()],
})
export class AppModule {
 }

 
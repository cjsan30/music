import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Song } from './entity/song.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('/song')
  // getSong(): Song[] {
  //   return this.appService.getSong();
  // }

  @Get('/title')
  getTitle(title: string): Promise<Song> {
    return this.appService.getTitle(title);
  }


}

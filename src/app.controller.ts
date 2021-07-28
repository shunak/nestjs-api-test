import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/ping')
  myCustomAPI(): {message: string} {
    return {
      message: 'pong',
    };
  }

  @Get('/books')
  getBooks(): {id: string; name: string; author: string;}[]{
    const books = [
      {id: '1', name: 'The Name of the Wind', author: 'Patrick Rothfuss'},
      {id: '2', name: 'The Path of Daggers', author: 'Daniel Abraham'},
      {id: '3', name: 'The Dragon Reborn', author: 'Patrick Rothfuss'},
      {id: '4', name: 'The Length of aaudi', author: 'Daniel Abraham'},
    ];

    return books
  }

}

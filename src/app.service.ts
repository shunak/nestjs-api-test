import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let greet = "こんにちは！";
    return greet;
    // return 'Hello World!';
  }
}
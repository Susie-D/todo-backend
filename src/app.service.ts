import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async addName(name: string) {
    return { name };
  }
  getNames(): string {
    return 'Hello World!';
  }
}

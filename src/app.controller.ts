import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getNames() {
    return await this.appService.getNames();
  }

  @Post('/name')
  async addName(@Body('name') name: string) {
    this.appService.addName(name);
    console.log('RESPONSE:', name);
    return name;
  }
}

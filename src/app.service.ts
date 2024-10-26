import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Name } from './name.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Name)
    private namesRepository: Repository<Name>,
  ) {}

  async addName(name: string) {
    // save it to the database
    await this.namesRepository.save({ name });
    return await this.getNames();
  }

  async getNames() {
    // get all names from database
    return await this.namesRepository.find();
  }
}

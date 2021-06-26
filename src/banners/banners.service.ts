import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { Banner } from './entities/banner.entity';

@Injectable()
export class BannersService {

  constructor(
    @InjectRepository(Banner)
    private bannersRepository: Repository<Banner>
  ) {}


  create(createBannerDto: CreateBannerDto) {
    return this.bannersRepository.save(createBannerDto)
  }

  findAll() {
    return this.bannersRepository.find()
  }

  findOne(id: number) {
    return this.bannersRepository.findOne(id);
  }

  update(id: number, updateBannerDto: UpdateBannerDto) {
    return `This action updates banner`;
  }

  remove(id: number) {
    return `This action removes a #${id} banner`;
  }
}

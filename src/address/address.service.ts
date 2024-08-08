import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  async createAddress(
    createAddressDto: CreateAddressDto,
    userId: number,
  ): Promise<AddressEntity> {
    console.log('------------- COMEÇA 123123 AQUI -------------');
    console.log(createAddressDto);
    console.log(userId);
    console.log('------------- TERMINA 123123 AQUI -------------');
    return this.addressRepository.save({
      ...createAddressDto,
      user_id: userId,
    });
  }
}

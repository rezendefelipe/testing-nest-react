import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserInterface } from './interfaces/user.interface';
import { hash } from 'bcrypt';
import { randomInt } from 'crypto';

@Injectable()
export class UserService {
  private users: UserInterface[] = [];

  async createUserService(
    createUserDto: CreateUserDto,
  ): Promise<UserInterface> {
    const saltOrRounds = 10;

    const hashPassword = await hash(createUserDto.password, saltOrRounds);

    return {
      ...createUserDto,
      password: hashPassword,
      id: randomInt(2000),
    };
  }
}

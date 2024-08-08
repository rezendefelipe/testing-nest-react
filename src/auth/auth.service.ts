import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { LoginDto } from './dtos/login.dto';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async login(loginDto: LoginDto): Promise<UserEntity> {
    const user: UserEntity = await this.userService
      .getUserByEmail(loginDto.email)
      .catch(() => undefined);

    if (!user) {
      throw new NotFoundException(`Email or password invalid`);
    }

    const isMatch = await compare(loginDto.password, user.password);

    if (!isMatch) {
      throw new NotFoundException(`Email or password invalid`);
    }

    return user;
  }
}

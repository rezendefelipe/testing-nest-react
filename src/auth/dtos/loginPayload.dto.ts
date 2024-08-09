import { UserEntity } from '../../user/entities/user.entity';

export class LoginPaylodDto {
  id: number;
  typeUser: number;

  constructor(user: UserEntity) {
    this.id = user.id;
    this.typeUser = user.typeUser;
  }

  getPaylod() {
    return {
      id: this.id,
      typeUser: this.typeUser,
    };
  }
}

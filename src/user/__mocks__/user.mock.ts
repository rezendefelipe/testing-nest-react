import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/userType.enum';

export const userEntityMock: UserEntity = {
  id: 1,
  name: 'test test',
  email: 'test@test.com',
  phone: '119988776655',
  doc: '62252877367',
  password: '123321',
  typeUser: UserType.User,
  createdAt: new Date(),
  updateAt: new Date(),
};

import { AddressEntity } from '../entities/address.entity';

export class ReturnAddressDto {
  complement: string;
  number: string;
  cep: string;

  constructor(address: AddressEntity) {
    this.complement = address.complement;
    this.number = address.number;
    this.cep = address.cep;
  }
}

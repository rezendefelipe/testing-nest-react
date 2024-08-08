import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableAddress1723044918492 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE TABLE address (
        id int(11) auto_increment NOT NULL,
        user_id int NOT NULL,
        complement varchar(255) NOT NULL,
        number varchar(255) NOT NULL,
        cep varchar(255) NOT NULL,
        city_id int NOT NULL,
        created_at datetime NOT NULL,
        update_at datetime NOT NULL,
        PRIMARY KEY (id),
        foreign key (user_id) references user (id),
        foreign key (city_id) references city (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`drop table address`);
  }
}

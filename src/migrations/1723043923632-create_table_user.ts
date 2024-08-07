import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1723043923632 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE user (
        id int(11) auto_increment NOT NULL,
        name varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        phone varchar(255) DEFAULT NULL,
        doc varchar(255) NOT NULL,
        password varchar(255) NOT NULL,
        type_user int(11) NOT NULL,
        created_at datetime NOT NULL,
        update_at datetime NOT NULL,
        PRIMARY KEY (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`drop table user`);
  }
}

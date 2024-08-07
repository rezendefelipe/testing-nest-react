import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableState1723044907503 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE TABLE state (
        id int(11) auto_increment NOT NULL,
        name varchar(255) NOT NULL,
        created_at datetime NOT NULL,
        update_at datetime NOT NULL,
        PRIMARY KEY (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`drop table state`);
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableCity1723044912695 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
      CREATE TABLE city (
        id int(11) auto_increment NOT NULL,
        state_id int(11) NOT NULL,
        name varchar(255) NOT NULL,
        created_at datetime NOT NULL,
        update_at datetime NOT NULL,
        PRIMARY KEY (id),
        constraint state_id_ibfk_1
          foreign key (state_id) references state (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`drop table city`);
  }
}

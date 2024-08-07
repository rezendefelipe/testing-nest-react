import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableState1723058839474 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        ALTER TABLE state add uf varchar(2) NOT NULL after name;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        ALTER TABLE state drop uf;
    `);
  }
}

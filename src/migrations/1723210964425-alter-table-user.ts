import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableUser1723210964425 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            ALTER TABLE user ADD UNIQUE (email);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(``);
  }
}

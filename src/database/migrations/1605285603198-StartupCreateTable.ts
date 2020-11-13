import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class StartupCreateTable1605285603198 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'startups',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'about',
            type: 'varchar',
          },
          {
            name: 'acting',
            type: 'varchar',
          },
          {
            name: 'logo',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'Now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'Now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('startups');
  }
}

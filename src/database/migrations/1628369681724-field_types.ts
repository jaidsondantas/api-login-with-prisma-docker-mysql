import {MigrationInterface, QueryRunner, Table} from "typeorm";
import {commonColumnsIds, commonDateColumns} from '../config-database';

export class fieldTypes1628369681724 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'field_types',
      columns: [
        ...commonColumnsIds,
        {
          name: 'name',
          type: 'varchar'
        },
        ...commonDateColumns
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('field_types');
  }

}

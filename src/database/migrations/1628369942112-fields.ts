import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
import {commonColumnsIds, commonDateColumns, UsersBy} from '../config-database';

export class fields1628369942112 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'fields',
      columns: [
        ...commonColumnsIds,
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'question',
          type: 'text'
        },
        {
          name: 'required',
          type: 'boolean'
        },
        {
          name: 'field_type',
          type: 'varchar'
        },
        {
          name: 'form',
          type: 'varchar'
        },
        ...commonDateColumns
      ]
    }));

    await queryRunner.createForeignKey('fields', new TableForeignKey({
      columnNames: ['field_type'],
      referencedColumnNames: ['id'],
      referencedTableName: 'field_types',
      onDelete: 'CASCADE'
    }));

    await queryRunner.createForeignKey('fields', new TableForeignKey({
      columnNames: ['form'],
      referencedColumnNames: ['id'],
      referencedTableName: 'forms',
      onDelete: 'CASCADE'
    }));

    await new UsersBy().commonUsersColumns(queryRunner, 'fields')
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('fields');
  }

}

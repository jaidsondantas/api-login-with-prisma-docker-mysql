import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
import {commonColumnsIds, commonDateColumns, UsersBy} from '../config-database';

export class form1628369250592 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'forms',
      columns: [
        ...commonColumnsIds,
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'description',
          type: 'varchar'
        },
        {
          name: 'client',
          type: 'varchar'
        },
        ...commonDateColumns
      ]
    }));

    await queryRunner.createForeignKey('forms', new TableForeignKey({
      columnNames: ['client'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE'
    }));

    await new UsersBy().commonUsersColumns(queryRunner, 'forms');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('forms');
  }

}

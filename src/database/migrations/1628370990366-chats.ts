import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
import {commonColumnsIds, commonDateColumns} from '../config-database';

export class chats1628370990366 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'chats',
      columns: [
        ...commonColumnsIds,
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'status',
          type: 'boolean'
        },
        {
          name: 'form',
          type: 'varchar'
        },
        {
          name: 'client',
          type: 'varchar'
        },
        ...commonDateColumns
      ]
    }));

    await queryRunner.createForeignKey('chats', new TableForeignKey({
      columnNames: ['client'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE'
    }));

    await queryRunner.createForeignKey('chats', new TableForeignKey({
      columnNames: ['form'],
      referencedColumnNames: ['id'],
      referencedTableName: 'forms',
      onDelete: 'CASCADE'
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('chats');
  }

}

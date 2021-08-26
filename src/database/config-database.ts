import {QueryRunner, TableColumn, TableForeignKey} from "typeorm";
import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import {TableColumnOptions} from 'typeorm/schema-builder/options/TableColumnOptions';

export const typeOrmOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'dev',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
}

export const commonColumnsIds: TableColumnOptions[] = [
  {
    name: "id",
    type: "varchar",
    isPrimary: true,
    generationStrategy: 'uuid',
    isGenerated: true
  }
];

export const commonDateColumns: TableColumnOptions[] = [
  {
    name: 'created_at',
    type: 'datetime',
  },
  {
    name: 'updated_at',
    type: 'datetime',
    default: 'now()',
    isNullable: true
  }
];

export class UsersBy {
  async commonUsersColumns(queryRunner: QueryRunner, table: string) {

    await queryRunner.addColumn(table, new TableColumn({
      name: 'created_by',
      type: 'varchar',
      isNullable: true
    }));

    await queryRunner.createForeignKey(table, new TableForeignKey({
      columnNames: ['created_by'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE'
    }))

    await queryRunner.addColumn(table, new TableColumn({
      name: 'updated_by',
      type: 'varchar',
      isNullable: true
    }));

    await queryRunner.createForeignKey(table, new TableForeignKey({
      columnNames: ['updated_by'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'CASCADE'
    }));
  }
}


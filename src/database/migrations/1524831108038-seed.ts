import {MigrationInterface, QueryRunner, Table} from "typeorm";
import {commonColumnsIds} from "../config-database";

export class seed1524831108038 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'seeds',
      columns: [
        ...commonColumnsIds,
        {
          name: 'key',
          type: 'varchar'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}

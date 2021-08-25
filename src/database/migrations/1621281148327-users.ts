import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";
import {commonColumnsIds, commonDateColumns} from '../config-database';

export class users1621281148327 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                ...commonColumnsIds,
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'password',
                    type: 'varchar',
                    length: '256'
                },
                {
                    name: 'salt',
                    type: 'varchar',
                },
                ...commonDateColumns
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}

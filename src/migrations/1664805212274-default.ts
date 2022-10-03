import { MigrationInterface, QueryRunner } from "typeorm";

export class default1664805212274 implements MigrationInterface {
    name = 'default1664805212274'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "classes" RENAME COLUMN "class_name" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "classes" RENAME COLUMN "name" TO "class_name"`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class default1664803128706 implements MigrationInterface {
    name = 'default1664803128706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects" RENAME COLUMN "subject_name" TO "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects" RENAME COLUMN "name" TO "subject_name"`);
    }

}

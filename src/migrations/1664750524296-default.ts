import { MigrationInterface, QueryRunner } from "typeorm";

export class default1664750524296 implements MigrationInterface {
    name = 'default1664750524296'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "teachers_subjects_subjects" ("teachersId" integer NOT NULL, "subjectsId" integer NOT NULL, CONSTRAINT "PK_aad960b3f7d068c59c0181460e8" PRIMARY KEY ("teachersId", "subjectsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_881ae84e059f2d51ce60ea8d60" ON "teachers_subjects_subjects" ("teachersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4afd1f51df48493ea92f3e62a8" ON "teachers_subjects_subjects" ("subjectsId") `);
        await queryRunner.query(`ALTER TABLE "teachers_subjects_subjects" ADD CONSTRAINT "FK_881ae84e059f2d51ce60ea8d604" FOREIGN KEY ("teachersId") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "teachers_subjects_subjects" ADD CONSTRAINT "FK_4afd1f51df48493ea92f3e62a82" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teachers_subjects_subjects" DROP CONSTRAINT "FK_4afd1f51df48493ea92f3e62a82"`);
        await queryRunner.query(`ALTER TABLE "teachers_subjects_subjects" DROP CONSTRAINT "FK_881ae84e059f2d51ce60ea8d604"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4afd1f51df48493ea92f3e62a8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_881ae84e059f2d51ce60ea8d60"`);
        await queryRunner.query(`DROP TABLE "teachers_subjects_subjects"`);
    }

}

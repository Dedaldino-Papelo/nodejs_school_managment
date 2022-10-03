import { MigrationInterface, QueryRunner } from "typeorm";

export class default1664751313812 implements MigrationInterface {
    name = 'default1664751313812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "courses_subjects_subjects" ("coursesId" integer NOT NULL, "subjectsId" integer NOT NULL, CONSTRAINT "PK_cfa949c4437a60408254a4ac86c" PRIMARY KEY ("coursesId", "subjectsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5351470cb59470197e8d14c1b6" ON "courses_subjects_subjects" ("coursesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_52fbba4be3969c125cfe2f85e0" ON "courses_subjects_subjects" ("subjectsId") `);
        await queryRunner.query(`ALTER TABLE "courses_subjects_subjects" ADD CONSTRAINT "FK_5351470cb59470197e8d14c1b6e" FOREIGN KEY ("coursesId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "courses_subjects_subjects" ADD CONSTRAINT "FK_52fbba4be3969c125cfe2f85e08" FOREIGN KEY ("subjectsId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses_subjects_subjects" DROP CONSTRAINT "FK_52fbba4be3969c125cfe2f85e08"`);
        await queryRunner.query(`ALTER TABLE "courses_subjects_subjects" DROP CONSTRAINT "FK_5351470cb59470197e8d14c1b6e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_52fbba4be3969c125cfe2f85e0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5351470cb59470197e8d14c1b6"`);
        await queryRunner.query(`DROP TABLE "courses_subjects_subjects"`);
    }

}

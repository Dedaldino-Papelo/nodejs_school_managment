import { MigrationInterface, QueryRunner } from "typeorm";

export class default1664748138025 implements MigrationInterface {
    name = 'default1664748138025'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "notas" ("id" SERIAL NOT NULL, "nota1" numeric(10,2) NOT NULL DEFAULT '0', "nota2" numeric(10,2) NOT NULL DEFAULT '0', "exame" numeric(10,2) NOT NULL DEFAULT '0', "notafinal" numeric(10,2) DEFAULT '0', "subjectId" integer, "studentId" integer, CONSTRAINT "PK_1f3d47f136b291534c128bb4516" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "course_name"`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "course_name" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "students" ADD "telefone" character varying(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP COLUMN "subject_name"`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD "subject_name" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "teachers" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "teachers" ADD "telefone" character varying(15) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "notas" ADD CONSTRAINT "FK_12bc97f4229ea874d93955d643a" FOREIGN KEY ("subjectId") REFERENCES "subjects"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "notas" ADD CONSTRAINT "FK_563a83122f628e5021815c870dc" FOREIGN KEY ("studentId") REFERENCES "students"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "notas" DROP CONSTRAINT "FK_563a83122f628e5021815c870dc"`);
        await queryRunner.query(`ALTER TABLE "notas" DROP CONSTRAINT "FK_12bc97f4229ea874d93955d643a"`);
        await queryRunner.query(`ALTER TABLE "teachers" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "teachers" ADD "telefone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "subjects" DROP COLUMN "subject_name"`);
        await queryRunner.query(`ALTER TABLE "subjects" ADD "subject_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "students" DROP COLUMN "telefone"`);
        await queryRunner.query(`ALTER TABLE "students" ADD "telefone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "course_name"`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "course_name" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "notas"`);
    }

}

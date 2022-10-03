import { MigrationInterface, QueryRunner } from "typeorm";

export class default1664739723633 implements MigrationInterface {
    name = 'default1664739723633'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "students" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "age" integer NOT NULL, "morada" character varying, "telefone" character varying NOT NULL, "classId" integer, CONSTRAINT "PK_7d7f07271ad4ce999880713f05e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "students" ADD CONSTRAINT "FK_575e5ce508ee1275f45cb7c4c32" FOREIGN KEY ("classId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students" DROP CONSTRAINT "FK_575e5ce508ee1275f45cb7c4c32"`);
        await queryRunner.query(`DROP TABLE "students"`);
    }

}

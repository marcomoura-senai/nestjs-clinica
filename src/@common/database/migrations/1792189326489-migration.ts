import { MigrationInterface, QueryRunner } from 'typeorm'

export class Migration1792189326489 implements MigrationInterface {
  name = 'Migration1792189326489'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."appointment_status_enum" AS ENUM('scheduled', 'in_progress', 'done', 'cancelled')`,
    )
    await queryRunner.query(
      `CREATE TABLE "appointment" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "patient_id" bigint NOT NULL, "doctor_id" bigint NOT NULL, "date" TIMESTAMP WITH TIME ZONE NOT NULL, "duration" integer NOT NULL, "status" "public"."appointment_status_enum" NOT NULL, CONSTRAINT "pk_appointment" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "doctor" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "crm" character varying(255) NOT NULL, "user_id" integer NOT NULL, CONSTRAINT "rel_doctor_user_id" UNIQUE ("user_id"), CONSTRAINT "pk_doctor" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "patient" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "name" character varying(255) NOT NULL, "cpf" character(11) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "pk_patient" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "medical_record" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "text" text NOT NULL, "patient_id" integer NOT NULL, CONSTRAINT "rel_medical_record_patient_id" UNIQUE ("patient_id"), CONSTRAINT "pk_medical_record" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "work_schedule" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "doctor_id" integer NOT NULL, "configuration" jsonb NOT NULL, CONSTRAINT "rel_work_schedule_doctor_id" UNIQUE ("doctor_id"), CONSTRAINT "pk_work_schedule" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `ALTER TABLE "doctor" ADD CONSTRAINT "fk_doctor_user_id" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "medical_record" ADD CONSTRAINT "fk_medical_record_patient_id" FOREIGN KEY ("patient_id") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "work_schedule" ADD CONSTRAINT "fk_work_schedule_doctor_id" FOREIGN KEY ("doctor_id") REFERENCES "doctor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "work_schedule" DROP CONSTRAINT "fk_work_schedule_doctor_id"`,
    )
    await queryRunner.query(
      `ALTER TABLE "medical_record" DROP CONSTRAINT "fk_medical_record_patient_id"`,
    )
    await queryRunner.query(
      `ALTER TABLE "doctor" DROP CONSTRAINT "fk_doctor_user_id"`,
    )
    await queryRunner.query(`DROP TABLE "work_schedule"`)
    await queryRunner.query(`DROP TABLE "medical_record"`)
    await queryRunner.query(`DROP TABLE "patient"`)
    await queryRunner.query(`DROP TABLE "doctor"`)
    await queryRunner.query(`DROP TABLE "appointment"`)
    await queryRunner.query(`DROP TYPE "public"."appointment_status_enum"`)
  }
}

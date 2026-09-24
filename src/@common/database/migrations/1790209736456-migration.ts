import { MigrationInterface, QueryRunner } from 'typeorm'

export class Migration1790209736456 implements MigrationInterface {
  name = 'Migration1790209736456'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "role" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "name" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "pk_role" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "idx_role_name" ON "role"  ("name") `,
    )
    await queryRunner.query(
      `CREATE TABLE "user_roles_role" ("user_id" integer NOT NULL, "role_id" integer NOT NULL, CONSTRAINT "pk_user_roles_role" PRIMARY KEY ("user_id", "role_id"))`,
    )
    await queryRunner.query(
      `CREATE INDEX "idx_user_roles_role_user_id" ON "user_roles_role"  ("user_id") `,
    )
    await queryRunner.query(
      `CREATE INDEX "idx_user_roles_role_role_id" ON "user_roles_role"  ("role_id") `,
    )
    await queryRunner.query(`ALTER TABLE "user" ADD "clinic_id" uuid NOT NULL`)
    await queryRunner.query(
      `ALTER TABLE "user_roles_role" ADD CONSTRAINT "fk_user_roles_role_user_id" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "user_roles_role" ADD CONSTRAINT "fk_user_roles_role_role_id" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    )

    await queryRunner.query(`
      INSERT INTO "role" ("name") VALUES ('admin')
      
      `)

    await queryRunner.query(`
        INSERT INTO "role" ("name") VALUES ('user')
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user_roles_role" DROP CONSTRAINT "fk_user_roles_role_role_id"`,
    )
    await queryRunner.query(
      `ALTER TABLE "user_roles_role" DROP CONSTRAINT "fk_user_roles_role_user_id"`,
    )
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "clinic_id"`)
    await queryRunner.query(`DROP INDEX "public"."idx_user_roles_role_role_id"`)
    await queryRunner.query(`DROP INDEX "public"."idx_user_roles_role_user_id"`)
    await queryRunner.query(`DROP TABLE "user_roles_role"`)
    await queryRunner.query(`DROP INDEX "public"."idx_role_name"`)
    await queryRunner.query(`DROP TABLE "role"`)
  }
}

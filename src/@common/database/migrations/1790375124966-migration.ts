import { genSaltSync, hash } from 'bcrypt'
import { MigrationInterface, QueryRunner } from 'typeorm'

export class Migration1790375124966 implements MigrationInterface {
  name = 'Migration1790375124966'

  public async up(queryRunner: QueryRunner): Promise<void> {
    const defaultRootPassword = await hash('root123@', genSaltSync())

    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "clinic_id"`)
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "uq_user_email" UNIQUE ("email")`,
    )

    const [result] = (await queryRunner.query(
      `
            INSERT INTO "user" ("name", "email", "password") VALUES ('root', 'root@email.com', $1)
            RETURNING *
            `,
      [defaultRootPassword],
    )) as { id: number }[]

    await queryRunner.query(
      `INSERT INTO user_roles_role values ($1, (SELECT id FROM role WHERE name = 'admin'))`,
      [result.id],
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "uq_user_email"`,
    )
    await queryRunner.query(`ALTER TABLE "user" ADD "clinic_id" uuid NOT NULL`)
    await queryRunner.query(`DELETE FROM user WHERE email = root@email.com`)
  }
}

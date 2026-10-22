import { MigrationInterface, QueryRunner } from 'typeorm'

import { RoleName } from '../../../role/role.entity'

export class Migration1792191328696 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO role (name) VALUES ($1), ($2)`, [
      RoleName.SECRETARY,
      RoleName.DOCTOR,
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM role WHERE name IN ($1, $2)`, [
      RoleName.DOCTOR,
      RoleName.SECRETARY,
    ])
  }
}

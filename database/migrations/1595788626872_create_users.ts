import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateUsers extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .primary()
      table
        .string('username', 80)
        .notNullable()
        .unique()
      table
        .string('name', 80)
        .notNullable()
      table
        .string('email', 254)
        .notNullable()
        .unique()
      table
        .string('avatar', 254)
      table
        .string('password')
        .notNullable()
      table
        .string('remember_me_token')
        .nullable()
      table
        .timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .primary()
      table
        .string('name', 80)
        .notNullable()
      table
        .string('type', 20)
        .notNullable()
      table
        .string('thumbnail', 254)
        .notNullable()
      table
        .boolean('is_sell')
        .notNullable()
      table
        .integer('units')
        .notNullable()
      table
        .float('price')
        .notNullable()
      table
        .uuid('user_id')
        .references('id')
        .inTable('users')
      table
        .timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

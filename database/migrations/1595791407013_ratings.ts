import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Ratings extends BaseSchema {
  protected tableName = 'ratings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .primary()
      table
        .integer('rating')
        .notNullable()
      table
        .uuid('user_id')
        .references('users.id')
      table
        .timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

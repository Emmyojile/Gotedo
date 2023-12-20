import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SupportRequests extends BaseSchema {
  protected tableName = 'support_requests'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table
      .integer("customer_id")
      .unsigned()
      .references("customers.id")
      .onDelete("CASCADE"); 
      table.string("email").notNullable();
      table.string("title").notNullable();
      table.text("message").notNullable();
      table.string("file_path").nullable();
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

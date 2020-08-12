import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'
import { BaseModel, column, belongsTo, BelongsTo, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Product extends BaseModel {
  @column()
  public id: string

  @column()
  public name: string

  @column()
  public type: string

  @column()
  public thumbnail: string

  @column()
  public is_sell: boolean

  @column()
  public units: number

  @column()
  public price: number

  @column()
  public user_id: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @beforeCreate()
  public static createId (product: Product) {
    product.id = uuidv4()
  }
}

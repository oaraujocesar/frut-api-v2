import Hash from '@ioc:Adonis/Core/Hash'
import { v4 as uuidv4 } from 'uuid'
import { DateTime } from 'luxon'
import { BaseModel, column, beforeSave, beforeCreate, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Rating from './Rating'

export default class User extends BaseModel {
  @column()
  public id: string

  @column()
  public name: string

  @column()
  public username: string

  @column()
  public email: string

  @column()
  public avatar: string

  @column()
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Rating)
  public ratings: HasMany<typeof Rating>

  @beforeSave()
  public static async hashPassword (user: User) {
    if(user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @beforeCreate()
  public static createId (user: User) {
    user.id = uuidv4()
  }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Store from 'App/Mediators/Client/Products/Store'
import Index from 'App/Mediators/Client/Products/Index'

export default class ProductController {
  public async store ({ request, response, auth }: HttpContextContract) {
    await auth.authenticate()

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const user_id = auth.user?.id

    const { status, data } = await Store(request.only(
      ['name', 'type', 'thumbnail', 'is_sell', 'units', 'price']),
    user_id
    )
    return response.status(status).send(data)
  }

  public async index ({ request, response, auth }: HttpContextContract) {
    await auth.authenticate()

    const user = auth.user as User

    const { status, data } = await Index(user)

    return response.status(status).send(data)
  }
}

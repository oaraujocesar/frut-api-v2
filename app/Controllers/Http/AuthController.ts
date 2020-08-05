import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Store from 'App/Mediators/Client/Auth/Store'
import Login from 'App/Mediators/Client/Auth/Login'

export default class AuthController {
  public async store ({ request, response }: HttpContextContract) {
    const { status, data } = await Store(request.only(['username', 'name', 'email', 'password']))
    return response.status(status).send(data)
  }

  public async login ({ request, response, auth }: HttpContextContract) {
    const { status, data } = await Login(request.only(['username', 'password']), auth)
    return response.status(status).send(data)
  }
}

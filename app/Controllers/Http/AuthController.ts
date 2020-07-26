import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Store from 'App/Mediators/Client/Auth/Store'
import Login from 'App/Mediators/Client/Auth/Login'

export default class AuthController {
  public async store ({ request, response }: HttpContextContract) {
    return Store(request.only(['username', 'name', 'email', 'password']))
      .then(({ status, data }) => response.status(status).send(data))
  }

  public async login ({ request, response, auth }: HttpContextContract) {
    return Login(request.only(['username', 'password']), auth)
      .then(({ status, data }) => response.status(status).send(data))
  }
}

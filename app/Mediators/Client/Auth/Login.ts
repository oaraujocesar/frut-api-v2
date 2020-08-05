import { AuthContract } from '@ioc:Adonis/Addons/Auth'
import User from 'App/Models/User'

const Login = async ({ username, password }: User, auth: AuthContract) => {
  const token = await auth.use('api').attempt(username, password)

  return { status: 201, data: token.toJSON() }
}

export default Login

import { AuthContract } from '@ioc:Adonis/Addons/Auth'

interface Payload {
  username: string
  password: string
}

const Login = async ({ username, password }: Payload, auth: AuthContract) => {
  const token = await auth.use('api').attempt(username, password)

  return { status: 201, data: token.toJSON() }
}

export default Login

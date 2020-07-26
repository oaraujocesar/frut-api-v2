import User from 'App/Models/User'

interface Payload {
  username: string
  name: string
  email: string
  password: string
}

const Store = async ({ username, name, email, password }: Payload) => {
  const userExists = await User.findBy('username', username)

  if (!userExists) {
    const user = await User.create({ username, name, email, password })

    return { status: 201, data: user }
  } else {
    return { status: 400, data: { error: 'User already exists' } }
  }
}

export default Store

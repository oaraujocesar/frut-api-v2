import User from 'App/Models/User'

const Store = async ({ username, name, email, password }: User) => {
  const userExists = await User.findBy('username', username)

  if (!userExists) {
    const user = await User.create({ username, name, email, password })

    return { status: 201, data: user }
  } else {
    return { status: 400, data: { error: 'User already exists' } }
  }
}

export default Store

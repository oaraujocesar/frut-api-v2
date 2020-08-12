import Product from 'App/Models/Product'
import User from 'App/Models/User'
import Rating from 'App/Models/Rating'

const avgRating = async (user) => {
  const ratings = await Rating
    .query()
    .select('rating')
    .where('user_id', '=', user.id)

  const ratingArray = ratings.map(item => {
    return item.rating
  })

  const totalRating = ratingArray.reduce(function (acc, val) {
    return acc + val
  }, 0)

  const averageRating = (totalRating / ratingArray.length).toFixed(2)

  return averageRating
}

const Index = async (user: User) => {
  const productsArray = await Product.all()

  const averageRating = await avgRating(user)

  const products = productsArray.map(product => {
    return {
      name: user.name,
      rating: averageRating,
      product,
    }
  })

  return { status: 201, data: products }
}

export default Index

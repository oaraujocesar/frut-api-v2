import Product from 'App/Models/Product'

const Store = async ({ name, type, thumbnail, is_sell, units, price }: Product, user_id: string) => {
  const product = await Product.create({ name, type, thumbnail, is_sell, units, price, user_id })

  return { status: 201, data: product }
}

export default Store

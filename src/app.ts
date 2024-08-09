import express, { Request, Response } from 'express'

import sequelize from './database'
import Customer from './models/customer.model'
import Product from './models/product.model'
import Category from './models/category.model'
import Order from './models/order.model'

import customerRoutes from './routes/customer.routes'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api/customers', customerRoutes)

// Define associations
Category.hasMany(Product, { foreignKey: 'categoryId' })
Product.belongsTo(Category, { foreignKey: 'categoryId' })

Customer.hasMany(Order, { foreignKey: 'customerId' })
Order.belongsTo(Customer, { foreignKey: 'customerId' })

// Basic Route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome!')
})

// Sync Database and start server

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('Database synced')

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
    })
  })
  .catch((error) => console.log('Error syncing database:', error))

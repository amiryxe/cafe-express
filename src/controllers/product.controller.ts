import { Request, Response } from 'express'

import Product from '../models/product.model'
import Category from '../models/category.model'

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, imageUrl, price, categoryId } = req.body
    const category = await Category.findByPk(categoryId)

    if (!category) {
      return res.status(400).json({ error: 'Invalid category ID' })
    }

    const newProduct = await Product.create({ name, imageUrl, price, categoryId })
    res.status(201).json(newProduct)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' })
  }
}

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll({ include: [Category] })
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve products' })
  }
}

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Product.findByPk(id, { include: [Category] })

    if (product) {
      res.status(200).json(product)
    } else {
      res.status(404).json({ error: 'Product not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve product' })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name, imageUrl, price, categoryId } = req.body
    const product = await Product.findByPk(id)

    if (product) {
      const category = await Category.findByPk(categoryId)

      if (!category) {
        return res.status(400).json({ error: 'Invalid Category ID' })
      }

      await product.update({ name, imageUrl, price, categoryId })
      res.status(200).json(product)
    } else {
      res.status(404).json({ error: 'Product not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (product) {
      await product.destroy()
      res.status(204).send()
    } else {
      res.status(404).json({ error: 'Product not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' })
  }
}

import { Request, Response } from 'express'

import Category from '../models/category.model'

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, imageUrl } = req.body
    const newCategory = await Category.create({ name, imageUrl })
    res.status(201).json(newCategory)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create category' })
  }
}

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.findAll()
    res.status(200).json(categories)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve categories' })
  }
}

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const category = await Category.findByPk(id)

    if (category) {
      res.status(200).json(category)
    } else {
      res.status(404).json({ error: 'Category not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve category' })
  }
}

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name, imageUrl } = req.body
    const category = await Category.findByPk(id)

    if (category) {
      category.update({ name, imageUrl })
      res.status(200).json(category)
    } else {
      res.status(404).json({ error: 'Category not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update category' })
  }
}

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const category = await Category.findByPk(id)

    if (category) {
      category.destroy()
      res.status(204).send()
    } else {
      res.status(404).json({ error: 'Category not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete category' })
  }
}

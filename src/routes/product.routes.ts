import { Router } from 'express'

import {
  createProduct,
  getProductById,
  getProducts,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller'

const router = Router()

router.post('/', createProduct)
router.get('/', getProducts)
router.get('/:id', getProductById)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

export default router

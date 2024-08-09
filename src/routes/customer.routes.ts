import { Router } from 'express'

import {
  createCustomer,
  updateCustomer,
  getCustomers,
  getCustomerById,
  deleteCustomer,
} from '../controllers/customer.controller'

const router = Router()

router.post('/', createCustomer)
router.get('/', getCustomers)
router.get('/:id', getCustomerById)
router.put('/:id', updateCustomer)
router.delete('/:id', deleteCustomer)

export default router

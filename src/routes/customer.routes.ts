import { Router } from 'express'

import {
  createCustomer,
  updateCustomer,
  getCustomers,
  getCustomerById,
  deleteCustomer,
} from '../controllers/customer.controller'

const router = Router()

router.post('/customers', createCustomer)
router.get('/customers', getCustomers)
router.get('/customers/:id', getCustomerById)
router.put('/customers/:id', updateCustomer)
router.delete('/customers/:id', deleteCustomer)

export default router

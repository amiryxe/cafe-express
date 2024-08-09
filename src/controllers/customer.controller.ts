import { Request, Response } from 'express'
import Customer from '../models/customer.model'

export const createCustomer = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, code } = req.body
    const newCustomer = await Customer.create({
      name,
      email,
      phone,
      code,
    })

    res.status(201).json(newCustomer)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create customer' })
  }
}

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await Customer.findAll()
    res.status(200).json(customers)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve customer' })
  }
}

export const getCustomerById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const customer = await Customer.findByPk(id)

    if (customer) {
      res.status(200).json(customer)
    } else {
      res.status(404).json({ error: 'Customer not found' })
    }
  } catch (error) {
    res.send(500).json({ error: 'Failed to retrieve customer' })
  }
}

export const updateCustomer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name, email, code, phone } = req.body
    const customer = await Customer.findByPk(id)

    if (customer) {
      await customer.update({ name, email, phone, code })
      res.status(200).json(customer)
    } else {
      res.status(404).json({ error: 'Customer not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update customer' })
  }
}

export const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const customer = await Customer.findByPk(id)

    if (customer) {
      await customer.destroy()
      res.status(204).send()
    } else {
      res.status(404).json({ error: 'Customer not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete customer' })
  }
}

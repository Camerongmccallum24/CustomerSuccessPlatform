import express, { Request, Response } from 'express';
import { Customer, customers } from '../models/Customer';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Get all customers
router.get('/', (req: Request, res: Response) => {
  res.json(customers);
});

// Create a new customer
router.post('/', (req: Request, res: Response) => {
  const { name, email } = req.body;
  const newCustomer: Customer = {
    id: uuidv4(),
    name,
    email,
    healthScore: Math.random() * 100
  };
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

// Get a specific customer
router.get('/:id', (req: Request, res: Response) => {
  const customer = customers.find((c: Customer) => c.id === req.params.id);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).send('Customer not found');
  }
});

export default router;

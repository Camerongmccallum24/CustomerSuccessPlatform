export interface Customer {
    id: string;
    name: string;
    email: string;
    healthScore: number;
}

export const customers: Customer[] = [];

// Remove the circular import
// import { Customer, customers } from '../models/Customer';

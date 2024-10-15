import request from 'supertest';
import express from 'express';
import customerRoutes from '../routes/customerRoutes';

const app = express();
app.use(express.json());
app.use('/api/customers', customerRoutes);

describe('Customer Routes', () => {
  it('should create a new customer', async () => {
    const res = await request(app)
      .post('/api/customers')
      .send({
        name: 'Test Customer',
        email: 'test@example.com'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.name).toEqual('Test Customer');
  });

  it('should get all customers', async () => {
    const res = await request(app).get('/api/customers');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});

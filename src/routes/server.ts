import express from 'express';
import customerRoutes from './routes/customerRoutes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/customers', customerRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
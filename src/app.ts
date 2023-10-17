import express, { Request, Response } from 'express';
import pool from './utils/db';

const app = express();

app.get('/', (req: Request, res: Response) => {
  pool.query('SELECT * FROM "products"').then((result) => {
    // res.send(result.rows);
    res.json(result.rows);
  });
});

app.listen(5000, () => {
  console.log(`server started at http://localhost:${5000}`);
});

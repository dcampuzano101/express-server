import pg from 'pg';

const pool = new pg.Pool({
  host: 'ep-little-sunset-55194157.us-east-1.aws.neon.tech',
  user: 'dcampuzano101',
  database: 'northwind',
  password: '0DwPK9NALYhO',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  ssl: true,
});

// const testQueries = async () => {
//   console.log(await pool.query('SELECT * FROM "products"'));
// };

// testQueries();

export default pool;

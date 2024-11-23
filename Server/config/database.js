import pkg from 'pg'

const {Pool} = pkg
const pool = new Pool({
    user: process.env.PGUSER,        // PostgreSQL username
    host: process.env.PGHOST,        // Host where PostgreSQL is running
    database: process.env.PGDATABASE, // Database name
    password: process.env.PGPASSWORD, // Database password
    port: process.env.PGPORT,        // PostgreSQL port
})

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error connecting to the database', err.stack);
    } else {
      console.log('Database connected successfully');
    }
  });
  
  export default pool;
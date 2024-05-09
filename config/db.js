import pkg from 'pg';

const { Pool } = pkg;

    const pool = new Pool({
      connectionString:
        "postgres://DB_USER:DB_PASSWORD@DB_HOST:DB_PORT/DB_DATABASE",
    });
     
     const getDate = async () =>{
         const rows= await pool.query('SELECT * from users');
     console.log(rows)
     return rows ;
};
getDate();

export default pool

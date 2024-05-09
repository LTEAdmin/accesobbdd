import pkg from 'pg';

const { Client } = pkg;

const conecction = async () => {
    const client = new Client({
        user: 'BBDD',
        host: 'localhost',
        database: 'users',
        password: '123456',
        port: 5432,
     });
     await client.connect();
     const result = await client.query('SELECT NOW()');
     console.log(result)
     await client.end();
};
conecction();
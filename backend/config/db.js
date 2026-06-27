const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER, 
    database: process.env.DB_DATABASE,
    options: {
        encrypt: false, // Set true if deploying to Azure Cloud
        trustServerCertificate: true // Required for local developer instances
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL Database successfully!');
        return pool;
    })
    .catch(err => {
        console.error('Database Connection Failed: ', err);
        process.exit(1);
    });

module.exports = { sql, poolPromise };
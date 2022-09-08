const { Client } = require('pg')

console.log("hello world");

async function testPandaDatabase() { 

    console.log("function start")
    const client = new Client({connectionString: process.env.PANDASECRET, ssl: {rejectUnauthorized: false}})
    await client.connect()
    // const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    // console.log(res.rows[0].message) // Hello world!
    // await client.end()
}

testPandaDatabase();
console.log("end");
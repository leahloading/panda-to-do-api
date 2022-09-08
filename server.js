const { Client } = require('pg')

console.log("hello world");

async function testPandaDatabase() { 

    console.log("function start")
    const client = new Client({connectionString: process.env.PANDASECRET, ssl: {rejectUnauthorized: false}})
    await client.connect()
    // const res = await client.query('select * from todos')
    const res = await client.query("insert into todos (description, status) values('find friends', true)")
    console.log(res.rows)
    // await client.end()
}

testPandaDatabase();
console.log("end");
const pg = require('pg')
require('dotenv').config()


const pool = new pg.Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DB,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
})

const createTablesQuery =
    `
    create table if not exists film
    (
        id              serial primary key,
        name            varchar(100),
        date_of_release date
    );
    
    create table if not exists genre
    (
        id serial primary key,
        name varchar(100)
    );
    
    create table if not exists film_genre
    (
        id    serial primary key,
        film  int references film (id) on delete cascade,
        genre int references genre (id) on delete cascade,
        unique (film, genre)
    );
    `

// pool.connect((err, client, done) => {
//   if (err) throw err
//   client.query(createTablesQuery, (err, res) => {
//     done()
//
//     if (err) {
//       console.log(err.stack)
//     } else {
//       console.log(res)
//     }
//   })
// })

module.exports = pool
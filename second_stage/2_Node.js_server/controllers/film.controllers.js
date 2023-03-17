const db = require('../db')

class FilmControllers {
    async createFilm(req, res) {
        const {name, dateOfRelease, genres} = req.body
        const newFilm = await db.query(
            `
            insert into film (name, date_of_release) 
            values ($1, $2) returning *
            `,
            [name, dateOfRelease]
        )
        await db.query(
            `
            insert into film_genre (film, genre)
            values (currval('film_id_seq'), unnest(array[$1::integer[]]))
            `,
            [genres]
        )
        res.json(newFilm.rows[0])
    }
    async getFilms(req, res) {
        const films = await db.query(
            'select * from film'
        )
        res.json(films.rows)
    }
    async getOneFilm(req, res) {
        const id = req.params.id
        const film = await db.query('' +
            'select * from film where id = $1',
            [id]
        )
        res.json(film.rows[0])
    }
    async updateFilm(req, res) {
        const {name, dateOfRelease, genres} = req.body
        const id = req.params.id
        const newFilm = await db.query(
            `
            update film 
            set name = $2, date_of_release = $3
            where id = $1 returning *
            `,
            [id, name, dateOfRelease]
        )
        // for (let genre of genres) {
        await db.query(
            `
            insert into film_genre (film, genre) 
            values ($1, unnest(array[$2::integer[]]))
            on conflict do nothing
            `,
            [id, genres]
        )


        res.json(newFilm.rows[0])
    }
    async deleteFilm(req, res) {
        const id = req.params.id
        await db.query(
            'delete from film where id = $1',
            [id]
        )
        res.status(200)
        res.json('deleted')
    }
}

module.exports = new FilmControllers()
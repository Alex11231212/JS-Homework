const db = require('../db')

class GenreControllers {
    async createGenre(req, res) {
        const {name} = req.body
        const newGenre = await db.query(
            'insert into genre (name) values ($1) returning *',
            [name]
        )
        res.json(newGenre.rows)
    }
    async getGenres(req, res) {
        const genre = await db.query(
            'select * from genre'
        )
        res.json(genre.rows)
    }
    async getOneGenre(req, res) {
        const id = req.params.id
        const genre = await db.query('' +
            'select * from genre where id = $1',
            [id]
        )
        res.json(genre.rows[0])
    }
    async updateGenre(req, res) {
        const {name} = req.body
        const id = req.params.id
        const newGenre = await db.query(
            'update genre set name = $1 where id = $2 returning *',
            [name, id]
        )
        res.json(newGenre.rows[0])
    }
    async deleteGenre(req, res) {
        const id = req.params.id
        await db.query(
            'delete from genre where id = $1',
            [id]
        )
        res.status(200)
        res.json('deleted')
    }
}

module.exports = new GenreControllers()
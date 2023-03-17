const Router = require('express')
const router = new Router()
const genreController = require('../controllers/genre.controllers')

router.post('/genres', genreController.createGenre)
router.get('/genres/:id', genreController.getOneGenre)
router.get('/genres', genreController.getGenres)
router.put('/genres/:id', genreController.updateGenre)
router.delete('/genres/:id', genreController.deleteGenre)

module.exports = router
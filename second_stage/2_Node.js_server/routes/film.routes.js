const Router = require('express')
const router = new Router()
const filmController = require('../controllers/film.controllers')

router.post('/films', filmController.createFilm)
router.get('/films/:id', filmController.getOneFilm)
router.get('/films', filmController.getFilms)
router.put('/films/:id', filmController.updateFilm)
router.delete('/films/:id', filmController.deleteFilm)

module.exports = router
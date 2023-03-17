const express = require('express')
const filmRouter = require('./routes/film.routes')
const genreRouter = require('./routes/genre.routes')

const PORT = process.env.PORT || 8080

// const app = new Application()
// const router = new Router()

const app = express()

app.use(express.json())
app.use('/', filmRouter)
app.use('/', genreRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
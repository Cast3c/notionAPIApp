const config = require('./utils/config')
const express = require('express')
const cors = require('cors')
const notionRoutes = require('./routes/notion')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/cierreViajes', notionRoutes)

const PORT = config.PORT || 3001
app.listen(PORT, () => console.log(`Server listening and connected`))




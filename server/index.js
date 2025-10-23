const config = require('./utils/config')
const express = require('express')
const cors = require('cors')
const notionRoutes = require('./routes/notion')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.send('Servidor TaskApp funcionando correctamente 🚀');
});

app.use('/api/cierreViajes', notionRoutes)

const PORT = config.PORT || 3000
app.listen(PORT, '0.0.0.0', () => console.log(`Server listening and connected`))




// config inicial
require('dotenv').config()
import express, { urlencoded, json } from 'express'
const app = express()
import { connect } from 'mongoose'

// forma de ler json / middlewares
app.use(
    urlencoded({
    extended: true,
}),
)
app.use(json())

// rotas do api
import personRoutes from './routes/personRoutes'

app.use('/person', personRoutes)

// rota iniciaql / endpoint
app.get('/', (req, res) => {

    // mostrar req


res.json({ message: 'OI Express!'})

})


// mongodb+srv://julioamorim:<password>@apicluster.cxhdcwe.mongodb.net/?retryWrites=true&w=majority

// entregar uma porta
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.cxhdcwe.mongodb.net/?retryWrites=true&w=majority`,
)
.then(() => {
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
})
.catch((err)=> console.log(err))


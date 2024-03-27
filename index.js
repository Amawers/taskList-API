const express = require('express')
const app = express()
app.use(express.json())
const AuthRoute = require('./routes/authRoute')

app.use('/', AuthRoute)

app.listen(3000, async () => {
  try {
    const db = require('./models/index')
    await db.sequelize.sync({ alter: true })
    console.log('All models successfully synchronized')
  } catch (error) {
    console.log(error)
  }
  console.log('Connected to port 3000...')
})

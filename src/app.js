import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import dataRouter from './routes/data.js'

const app = express()
app.use(cors())

app.use('/api', dataRouter)

app.use((err, req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: err.message
  })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Serving @ ${PORT}`))

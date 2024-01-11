import express from 'express'
import proposalRouter from './routes/proposal'
import config from '../config'
import cors from 'cors'
import './utils/bigIntPolyfill'

const app = express()
const PORT = process.env.PORT || config.serverPort

app.use(express.urlencoded( {extended: false}))
app.use(express.json())
app.use(cors())

app.use('/proposals', proposalRouter)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

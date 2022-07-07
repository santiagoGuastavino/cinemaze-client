import express from 'express'
import {
  getMapSendData
} from '../controllers/dataController.js'

const router = express.Router()

router.get('/data/:id', getMapSendData)

export default router

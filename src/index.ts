import express from 'express'
import http from 'http'

import bodyParser from 'body-parser'
import serviceApi from '../dist/index'
import { serviceImpl } from './impl/types'
const app = express();
const impl = new serviceImpl();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

serviceApi(app,impl)

const port = Number(process.env.PORT ?? 8000)

http.createServer(app).listen(port,'0.0.0.0',()=>{
	console.log(`server running at http://localhost:${port}`)
})


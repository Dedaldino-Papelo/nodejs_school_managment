import express, {Request, Response} from 'express'
import { AppDataSource } from './data-source'
import router from './routes'
const app = express()
const PORT = process.env.PORT || 5000


AppDataSource.initialize().then(async () => { 
    console.log("Successfully conected")

 }).catch(error => console.log(error)) 

 app.use(express.json())
 app.use(router)

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})




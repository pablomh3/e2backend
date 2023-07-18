import express, {Express} from "express"
import userRoutes from '../routes/userRoutes'
import gastosRoutes from "../routes/gastosRoutes"
import { conectarDB } from "../database/config"

export class Server {
    app: Express
    constructor () {
        this.app = express()
        this.conexionDB()
        this.middlewares()
        this.routes()
    }
    async conexionDB () :Promise <void>{
        await conectarDB()
    }

    middlewares() :void {
        this.app.use(express.json())
    }

    routes(): void {
        this.app.use("/usuarios", userRoutes)
        this.app.use("/gastos", gastosRoutes)
    }
    listen () :void{
        this.app.listen(8080, () =>{
            console.log("corriendo en el puerto 8080")
        })
    }
}
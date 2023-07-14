import express, {Express} from "express"

import { conectarDB } from "../database/config"

export class Server {
    app: Express
    constructor () {
        this.app = express()
        this.conexionDB()
        this.middlewares()
    }
    async conexionDB () :Promise <void>{
        await conectarDB()
    }

    middlewares() :void {
        this.app.use(express.json())
    }
    listen () :void{
        this.app.listen(8080, () =>{
            console.log("corriendo en el puerto 8080")
        })
    }
}
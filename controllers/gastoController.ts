import { Request, Response } from "express";
import Gasto, {IGasto} from "../models/gastos"


export const createGasto = async ( req: Request, res: Response) =>{
    const gastoData: IGasto = req.body 

    const { nombre, dni, monto, razon } = gastoData 

    if ( !nombre || !dni || !monto || !razon ) {
        res.json({
            msj: "faltan datos necesarios"
        })
        return
    }
   
    const gasto = new Gasto(gastoData)
    await gasto.save()

    res.json({
        msj: "nuevo gasto creado",
        gasto
    })
}
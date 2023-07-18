import { Request, Response } from "express";
import User, {IUser} from "../models/users";
import Gasto from "../models/gastos";

export const createUser = async ( req: Request, res: Response) =>{
    const UserData: IUser = req.body

    const {dni, nombre, gasto } = UserData

    if (!dni || !nombre ) {
        res.json({
            msj: "faltan datos necesarios"
        })
        return
    }

    const userEnDB = await User.findOne({dni:dni})
    if(userEnDB){
        res.json({
            msj: "el usuario ya existe en la DB"
        })
    }
    const gastoData = await Gasto.findOne({nombre:gasto})


    const user = new User ({
        dni,
        nombre,
       gasto: gastoData?._id,
    })

    await user.save()

    res.json ({
        msj: "usuario creado",
        user
    })
}

export const getUsers = async ( req: Request, res: Response) => {
    const condicion = { estado: true }

    const users : IUser [] = await User.find(condicion)

    res.json({
        users
    })
}

export const getUserDNI = async ( req: Request, res: Response) =>{
    const { dni } = req.params

    const user : IUser | null  = await User.findOne({dni:dni})
    .populate("gasto", ["monto", "razon"])
    res.json({
        user
    })
}
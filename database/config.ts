import mongoose from "mongoose";

export const conectarDB = async  (): Promise <void> => {
    try {
        await mongoose.connect("mongodb+srv://backendE2:nucbae2backend@nombredecluster.dafwh8z.mongodb.net/")
        console.log("Base de Datos conectada")
    } catch (error) {
        console.log(error)
        throw new Error("error al iniciar Base de Datos")
    }
}
import {Model, Schema, model} from 'mongoose'

export interface IGasto {
    nombre: string,
    dni: number,
    monto: number,
    razon: string,
}

const GastoSchema = new Schema <IGasto>({
    nombre:{
        type: String,
        required: true, 
       
    },
    dni:{
        type: Number,
        required: true,
        
    },
    monto:{
        type: Number,
        required: true,
    },
    razon:{
        type: String,
        required: true,
    }
    
})

const Gasto: Model <IGasto> = model <IGasto> ("Gasto", GastoSchema)

export default Gasto
import {Model, Schema, model} from 'mongoose'

export interface IUser {
    dni: number,
    nombre: string,
    gasto: number,
    gastoTotal: number,

}

const UserSchema = new Schema <IUser>({
    dni:{
        type: Number,
        required: true,
        unique: true,
    },
    nombre:{
        type: String,
        required: true, 
    },
    gasto:{
        type: Number,
        required: true,
    },
    gastoTotal:{
        type: Number,
        required: false,
    }
})

const User: Model <IUser> = model <IUser> ("User", UserSchema)

export default User
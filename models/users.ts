import {Model, ObjectId, Schema, model} from 'mongoose'

export interface IUser {
    dni: number,
    nombre: string,
    gasto: ObjectId,
    estado: boolean,
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
    estado:{
        type: Boolean,
        required: false,
        default: true,
    },
    gasto:{
      type: Schema.Types.ObjectId,
      ref:"Gasto",
    }
})

const User: Model <IUser> = model <IUser> ("User", UserSchema)

export default User
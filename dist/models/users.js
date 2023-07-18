"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    dni: {
        type: Number,
        required: true,
        unique: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    estado: {
        type: Boolean,
        required: false,
        default: true,
    },
    gasto: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Gasto",
    }
});
const User = (0, mongoose_1.model)("User", UserSchema);
exports.default = User;

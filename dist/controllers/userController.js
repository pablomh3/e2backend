"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserDNI = exports.getUsers = exports.createUser = void 0;
const users_1 = __importDefault(require("../models/users"));
const gastos_1 = __importDefault(require("../models/gastos"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const UserData = req.body;
    const { dni, nombre, gasto } = UserData;
    if (!dni || !nombre) {
        res.json({
            msj: "faltan datos necesarios"
        });
        return;
    }
    const userEnDB = yield users_1.default.findOne({ dni: dni });
    if (userEnDB) {
        res.json({
            msj: "el usuario ya existe en la DB"
        });
    }
    const gastoData = yield gastos_1.default.findOne({ nombre: gasto });
    const user = new users_1.default({
        dni,
        nombre,
        gasto: gastoData === null || gastoData === void 0 ? void 0 : gastoData._id,
    });
    yield user.save();
    res.json({
        msj: "usuario creado",
        user
    });
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const condicion = { estado: true };
    const users = yield users_1.default.find(condicion);
    res.json({
        users
    });
});
exports.getUsers = getUsers;
const getUserDNI = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { dni } = req.params;
    const user = yield users_1.default.findOne({ dni: dni })
        .populate("gasto", ["monto", "razon"]);
    res.json({
        user
    });
});
exports.getUserDNI = getUserDNI;

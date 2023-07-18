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
exports.createGasto = void 0;
const gastos_1 = __importDefault(require("../models/gastos"));
const createGasto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gastoData = req.body;
    const { nombre, dni, monto, razon } = gastoData;
    if (!nombre || !dni || !monto || !razon) {
        res.json({
            msj: "faltan datos necesarios"
        });
        return;
    }
    const gasto = new gastos_1.default(gastoData);
    yield gasto.save();
    res.json({
        msj: "nuevo gasto creado",
        gasto
    });
});
exports.createGasto = createGasto;

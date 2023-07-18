"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gastoController_1 = require("../controllers/gastoController");
const router = (0, express_1.Router)();
router.post("/", gastoController_1.createGasto);
exports.default = router;

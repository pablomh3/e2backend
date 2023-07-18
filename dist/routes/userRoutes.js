"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.post("/", userController_1.createUser);
router.get("/", userController_1.getUsers);
router.get("/:dni", userController_1.getUserDNI);
exports.default = router;

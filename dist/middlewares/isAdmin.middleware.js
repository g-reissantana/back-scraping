"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdminMiddleware = void 0;
const auth_service_1 = require("../services/auth.service");
const isAdminMiddleware = async (req, res, next) => {
    const { password } = req.body;
    const result = await (0, auth_service_1.authService)(password);
    if (!result) {
        return res.status(401).send({ message: 'AUTHENTICATION_FAILURE' });
    }
    next();
};
exports.isAdminMiddleware = isAdminMiddleware;

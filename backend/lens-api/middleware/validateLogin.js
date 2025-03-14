import { sendError } from "../responses/index.js";
import loginSchema from "../models/loginSchema.js";

export const validateLogin = (event) => {
    const { error } = loginSchema.validate(JSON.parse(event.body), { abortEarly: false });

    if (error) {
        return sendError(400, error.details.map((err) => err.message).join(", "));
    }

    return null;
};

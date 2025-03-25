import { sendError } from "../responses/index.js";
import userSchema from '../models/userSchema.js';

export const validateUser = (event) => {
    const { error } = userSchema.validate(JSON.parse(event.body), { abortEarly: false });

    if (error) {
        return sendError(400, error.details.map((err) => err.message).join(", "));
    }

    return null;
};

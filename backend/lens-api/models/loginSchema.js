import Joi from "joi";

const loginSchema = Joi.object({
    username: Joi.string().min(3), // Możesz logować się username lub email
    email: Joi.string().email(),
    password: Joi.string().min(8).required(),
}).xor("username", "email"); // Wymaga albo username, albo email, ale nie obu jednocześnie

export default loginSchema;

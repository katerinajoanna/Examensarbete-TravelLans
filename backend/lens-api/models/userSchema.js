import Joi from "joi";

const userSchema = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
        "any.only": "The passwords are not the same.",
    }),
    country: Joi.string().required(),
    city: Joi.string().required(),
});

export default userSchema;
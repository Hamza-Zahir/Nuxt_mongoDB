import Joi from "joi";
import User from "./models/user";

export const userSchema = Joi.object({
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .message('Please enter a valid email.')
    .external(async (value) => {
        const user = await User.findOne({ email: value });
        if (user) {
          throw createError({
            statusMessage: "E-Mail address already exists!",
            statusCode: 401,
            fatal: false,
          });
        }
      })
//   .normalize()
    ,
 
    password: Joi.string().trim().min(6).required(),
    name: Joi.string().trim().not().empty()

})
import  bcrypt from "bcryptjs";
import User from "~~/server/models/user";
import { userSchema } from "~~/server/validation";
export default defineEventHandler(async (e) => {
  let body = await readBody(e);
  // let { error } = await userSchema.validate(body);
  let  {error}  = await userSchema.validateAsync(body);
   
  if (error) { 
    throw createError({
      message: error.message.replace(/"/g, ""),
      statusCode: 400,
      fatal: false,
    });
  }
    

  try {
    const hashedPassword = await bcrypt.hash(body.password, 12);

     body = { ...body, password: hashedPassword}
    const userRespons = await User.create(body);
    return userRespons;

  } catch (error) {
    console.log(error);
  }
});

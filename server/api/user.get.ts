import User from "~~/server/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export default defineEventHandler(async (e) => {
  const email = "hamza19zahir98@gmail.com";
  const password = "hamza19";

  try {
    let loadedUser;
    const user = await User.findOne({ email: email });
    if (!user) {
      throw createError({
        message: "A user with this email could not be found.",
        statusCode: 401,
      });
    }
    loadedUser = user;
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw createError({
        message: "Wrong password!",
        statusCode: 401,
      });
    }
       const token = jwt.sign(
         {
           email: loadedUser.email,
           userId: loadedUser._id.toString()
         },
         'Some_use_secret',
         { expiresIn: '1h' }
       );
       return token
      //  res.status(200).json({ token: token, userId: loadedUser._id.toString() });
  } catch (error) {
    console.log(error);
  }
  //   const user = await User.findOne({ email: email });
  //   if (user) {
  //     return user;
  //   } else {
  //     return "user not found";
  //   }
  // } catch (error) {
  //   console.log(error);
  // }
});

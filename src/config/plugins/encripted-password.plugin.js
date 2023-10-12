import bcrypt from "bcrypt";

export const encryptedPassword = async (password) => {
   const salt = await bcrypt.genSalt();
   return await bcrypt.hash(password, salt);
};

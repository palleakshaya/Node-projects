import bcrypt from "bcrypt";

const password = "Password@123";

const NO_OF_ROUNDS = 10;
const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
const hashedPassword = await bcrypt.hash(password, salt);
console.log(salt); //everytime if we run and run again, salt value changes
console.log(hashedPassword);

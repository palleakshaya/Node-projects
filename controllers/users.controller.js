import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import {
  addingUsers,
  getUsersByUsername,
  getAllUsers,
} from "../services/users.service.js";

const genHashPassword = async (password) => {
  const NO_OF_ROUNDS = 10;
  const salt = await bcrypt.genSalt(NO_OF_ROUNDS);
  const hashedPassword = await bcrypt.hash(password, salt);
  // console.log(salt); //everytime if we run and run again, salt value changes
  // console.log(hashedPassword);
  return hashedPassword;
};

// const password = "Password@123";

export async function getAllUsersC(request, response) {
  try {
    const allUsers = await getAllUsers();
    console.log(allUsers);
    response.send(allUsers);
  } catch (error) {
    console.log(error);
    response.status(500).send("Failed to get Movies");
  }
}
export async function getUsersByUsernameC(request, response) {
  const { username } = request.params;
  console.log(username);
  let res;
  try {
    res = await getUsersByUsername(username);
    if (res.data) {
      response.send(res.data);
    } else {
      response.status(404).send("User Not Found");
    }
  } catch (error) {
    response.status(500).send("Failed to get Movies");
  }
}

export async function addingUsersC(request, response) {
  const data = request.body;

  if (data.password.length < 8) {
    response.status(400).send({ msg: "Password is too short" });
    return;
  }
  const userFromDB = await getUsersByUsername(data.username);
  if (userFromDB.data) {
    response.status(400).send({ msg: "Username already taken" });
    return;
  }

  console.log(data);
  const hashedPassword1 = await genHashPassword(data.password);

  try {
    await addingUsers({ username: data.username, password: hashedPassword1 });
    console.log(data.username, hashedPassword1);
    response.status(200).send({ msg: "User signed up sucessfully" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ msg: "Failed to signup the user" });
  }
}

export async function loginUsersC(request, response) {
  const data = request.body;
  const userFromDB = await getUsersByUsername(data.username);
  if (!userFromDB.data) {
    response.status(400).send({ msg: "Invalid Credentials" });
    return;
  } else {
    const storedDBPassword = userFromDB.data.password;
    const providedPassword = data.password;
    console.log(providedPassword, storedDBPassword);

    const isPasswordCheck = await bcrypt.compare(
      providedPassword,
      storedDBPassword
    );
    console.log(isPasswordCheck);
  }
}

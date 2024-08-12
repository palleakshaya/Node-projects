import { Users } from "../entities/users.entity.js";

async function addingUsers(addingUser) {
  await Users.create(addingUser).go();
}

async function getUsersByUsername(username) {
  return await Users.get({ username }).go();
}

async function getAllUsers() {
  return await Users.scan.go();
}

export { addingUsers, getUsersByUsername, getAllUsers };

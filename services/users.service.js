import { Users } from "../entities/users.entity.js";

async function addingUsers(addingUser) {
  await Users.create(addingUser).go();
}

async function getUsersById() {
  return await Users.get({ username }).go();
}

async function getAllUsers() {
  return await Users.scan.go();
}

export { addingUsers, getUsersById, getAllUsers };

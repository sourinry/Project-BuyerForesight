import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.join(__dirname, '../Data/users.json');

//read to json 
const read = async () => {
  const data = await fs.readFile(file, 'utf-8');
  return JSON.parse(data || '[]');
};

//write to json
const write = async (data) => {
  await fs.writeFile(file, JSON.stringify(data, null, 2));
};

//get all users 
export const getAll = async () => await read();

//get user by id
export const getById = async (id) => {
  const users = await read();
  return users.find(u => u.id == id);
};

//create user
export const create = async (data) => {
  const users = await read();
  const user = { id: Date.now(), ...data };

  users.push(user);
  await write(users);

  return user;
};

//update user by id
export const update = async (id, data) => {
  const users = await read();
  const index = users.findIndex(u => u.id == id);

  if (index === -1) return null;

  users[index] = { ...users[index], ...data };
  await write(users);

  return users[index];
};

//delete user by id
export const deleteUser = async (id) => {
  const users = await read();
  const index = users.findIndex(u => u.id == id);

  if (index === -1) return null;

  const deleted = users.splice(index, 1);
  await write(users);

  return deleted;
};
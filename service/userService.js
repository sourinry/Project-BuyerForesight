import repo from '../config/db.js';
import AppError from '../utils/apiError.js';

export const getUsers = async ({ search, sort, order }) => {
  let users = await repo.getAll();

  if (search) {
    users = users.filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (sort) {
    users.sort((a, b) => {
      if (order === 'desc') return b[sort] > a[sort] ? 1 : -1;
      return a[sort] > b[sort] ? 1 : -1;
    });
  }

  return users;
};

export const getUserById = async (id) => {
  const user = await repo.getById(id);
  if (!user) throw new AppError('User not found', 404);
  return user;
};

export const createUser = async (data) => {
  if (!data.name) throw new AppError('Name required', 400);
  return repo.create(data);
};

export const updateUser = async (id, data) => {
  const user = await repo.update(id, data);
  if (!user) throw new AppError('User not found', 404);
  return user;
};

export const deleteUser = async (id) => {
  const user = await repo.deleteUser(id); 
  if (!user) throw new AppError('User not found', 404);
};
import * as service from '../service/userService.js';

export const getUsers = async (req, res, next) => {
  try {
    const data = await service.getUsers(req.query);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const data = await service.getUserById(req.params.id);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const data = await service.createUser(req.body);
    res.status(201).json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const data = await service.updateUser(req.params.id, req.body);
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await service.deleteUser(req.params.id);
    res.json({ success: true, message: 'Deleted' });
  } catch (err) {
    next(err);
  }
};
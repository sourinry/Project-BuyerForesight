import express from 'express';
const router = express.Router();
import * as controller from '../controller/userController.js';
import { validate } from '../middlewares/validateMiddleware.js'
import { createUserSchema, updateUserSchema } from '../validators/userValidators.js'

router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById);
router.post('/', validate(createUserSchema), controller.createUser);
router.put('/:id', validate(updateUserSchema), controller.updateUser);
router.delete('/:id', controller.deleteUser);

export default router;
const { Router } = require('express')
const multer = require('multer')
const uploadConfig = require('../configs/upload');

const UserController = require('../Controllers/UsersControllers')
const UserAvatarControllers = require('../Controllers/UserAvatarControllers')

const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);


const usersController = new UserController();
const userAvatarControllers = new UserAvatarControllers();

usersRoutes.post('/',usersController.create); 
usersRoutes.put('/',ensureAuthenticated, usersController.update);
usersRoutes.patch('/avatar',ensureAuthenticated, upload.single("avatar"), userAvatarControllers.update)

module.exports = usersRoutes;



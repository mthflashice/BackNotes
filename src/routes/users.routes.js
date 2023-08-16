const{Router, request, response} = require("express");
const multer = require('multer')
const uploadConfig = require('../configs/upload')

const UserController = require('../Controllers/UsersControllers')
const UserAvatarControllers = require('../Controllers/UserAvatarControllers')

const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const usersRoutes = Router();
const update = multer(uploadConfig.MULTER);


const usersController = new UserController();
const userAvatarControllers = new UserAvatarControllers();

usersRoutes.post('/',usersController.create); 
usersRoutes.put('/',ensureAuthenticated, usersController.update);
usersRoutes.patch('/avatar',ensureAuthenticated, update.single('avatar'), userAvatarControllers.update);
// usersRoutes.patch('/avatar',ensureAuthenticated, update. single('avatar'),(request,response)=>{
//    console.log(request.file.filename)
//    response.json()
// });



   // response.send(`usuário: ${name}, Email: ${email}, E a senha: ${password}`);
  
           


module.exports= usersRoutes;
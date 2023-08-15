const{Router} = require("express");

const UserController = require('../Controllers/UsersControllers');
const ensureAuthenticated = require('../middleware/ensureAuthenticated')

const usersRoutes = Router();


const usersController = new UserController();

usersRoutes.post('/',usersController.create); 
usersRoutes.put('/',ensureAuthenticated, usersController.update);
    


   // response.send(`usuário: ${name}, Email: ${email}, E a senha: ${password}`);
  
           


module.exports= usersRoutes;
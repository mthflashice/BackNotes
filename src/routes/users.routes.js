const{Router} = require("express");

const UserController = require('./Controllers/UsersControllers');

const usersRoutes = Router();

const usersController = new UserController();

usersRoutes.post('/',usersController.create); 
    


   // response.send(`usuário: ${name}, Email: ${email}, E a senha: ${password}`);
  
           


module.exports= usersRoutes;
const{Router} = require("express");

const UserController = require('./Controllers/UsersControllers');

const usersRoutes = Router();

function myMiddleware(request,response,next){
   // console.log(`Você Passou pelo Middleware`);
   // if (!request.body.isAdmin) {
   //    return response.json({message: `User unauthorized`});
   // }
   next()
};

const usersController = new UserController();

usersRoutes.post('/',myMiddleware,usersController.create); 
    


   // response.send(`usuário: ${name}, Email: ${email}, E a senha: ${password}`);
  
           


module.exports= usersRoutes;
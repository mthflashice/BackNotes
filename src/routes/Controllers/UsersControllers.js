const appError = require("../utils/appError")

const sqliteConnection = require('../../database/sqlite')

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();
    const checkUserExists = await database.get("SELECT * FROM users WHERE email =(?)", [email])

    if(checkUserExists){
        throw new appError(`Este e-mail já é cadastrado `);
    }
        return response.status(201).json();
  }
}

// response.send(`usuário: ${name}, Email: ${email}, E a senha: ${password}`);


module.exports = UserController;

/*  Métodos da CLASS
- Index - GET para listas vários registro.
- show - GEt para exibir um registro especifico
- create - POST para um registro.
- update - PUT para atualizar um registro.
- delete - DELETE para remover um registro 

*/

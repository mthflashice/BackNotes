const {hash} = require('bcryptjs');
const appError = require("../utils/appError");

const sqliteConnection = require('../../database/sqlite');

class UserController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();
    const checkUserExists = await database.get("SELECT * FROM users WHERE email =(?)", [email])

    if(checkUserExists){
        throw new appError(`Este e-mail já é cadastrado `);
    }

    const hashedPassword = await hash(password, 8)

    await database.run("INSERT INTO users(name,email,password) VALUES (?,?,?)",
    [name, email, hashedPassword]
    )
        return response.status(201).json();
  }
async update(request, response){
  const{name, email} = request.body;
  const {id} = request.params;

  const database =await sqliteConnection();
  const user = await database.get("SELECT* FROM users WHERE id=(?)", [id]);

  if(!user){
    throw new appError('Usuário não encontrado');
  }

  const userWithUpdatedEmail = await database.get("SELECT* FROM users WHERE email = (?)", [email])

  if(userWithUpdatedEmail &&userWithUpdatedEmail.id!==user.id){
    throw new appError('Este email já está em uso');

  }
  user.name = name;
  user.email= email;

  await database.run(`
  UPDATE users SET
  name = ?,
  email = ?,
  updated_at = ?
  WHERE id = ?`,
  [user.name, user.email, new Date(), id])

  return response.json();
};


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

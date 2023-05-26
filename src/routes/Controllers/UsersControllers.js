class UserController {
  create(request, response) {
    const { name, email, password } = request.body;
    response.json({ name, email, password });
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

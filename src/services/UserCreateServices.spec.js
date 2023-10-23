const UserCreateServices= require('./UserCreateServices')
const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory');
const appError = require("../routes/utils/appError");


describe('UserCreateServices',()=>{
    it ('user should be create',async()=>{
        const user={
            name: 'User Test',
            email: "user@test.com",
            password: '123'
        };
    
        const userRepositoryInMemory = new UserRepositoryInMemory();
        const userCreateServices = new UserCreateServices (userRepositoryInMemory);
        const userCreated = await userCreateServices.execute(user); 
    
        expect(userCreated).toHaveProperty("id");
        
    });

    it("user not should be create with exists email", async () => {
        const user1 = {
            name: "User Test 1",
            email: "user@test.com",
            password: "123"
        };

        const user2 = {
            name: "User Test 2",
            email: "user@test.com",
            password: "456"
        };

        const userRepository = new UserRepositoryInMemory();
        const userCreatedService = new UserCreateServices(userRepository)

        await userCreatedService.execute(user1);
        await expect(userCreatedService.execute(user2)).rejects.toEqual(new appError(`Este e-mail já é cadastrado `))

    });
})

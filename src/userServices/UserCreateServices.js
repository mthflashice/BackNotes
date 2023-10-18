const {hash,compare} = require('bcryptjs');
const appError = require("../routes/utils/appError");

class UserCreateServices{
    constructor(userRepository){
        this.userRepository = userRepository;
            
    }


    async execute ({name,email, password}){
       

    const checkUserExists = await this.userRepository.findByEmail(email)

    if(checkUserExists){
        throw new appError(`Este e-mail já é cadastrado `);
    }

    const hashedPassword = await hash(password, 8)


    await this.userRepository.create({name, email, password:hashedPassword})
    }

}

module.exports= UserCreateServices
require ('express-async-errors');

const migrationsRun =require('./database/sqlite/migrations');


const express = require('express');

const routes = require('./routes');
const appError = require('./routes/utils/appError');



const app = express();


app.use(express.json());

app.use(routes);

migrationsRun();

app.use((error,request,response, next) =>{
    if(error instanceof appError){
        return response.status(error.statusCode).json({
            status: 'Error',
            message: error.message
        });
    }
    console.error(error);


    return response.status(500).json({
    status:'Error',
    message: 'Internal Server Error',
});

});



const PORT = 3000;
app.listen(PORT, ( ) => console.log(`Server is running on Port ${PORT}`))

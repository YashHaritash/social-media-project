const {Users} = require('../db/model');
const {getRandomUsername} = require('../utils/username');

async function createAnonUser() {
   
    const user = await Users.create({
        username:getRandomUsername()
    })
    return user;
}

async function getUserById(id){
    const user = await Users.findOne({
        where : {
            id:id
        }
    })

    return user;
}

async function getUserByUsername(username){
    const user = await Users.findOne({
        where : {
            username : username
        }
    })
    return user;
}


module.exports =  {
    createAnonUser,
    getUserById,
    getUserByUsername
}

//Testing

/*
//async IIFE
(async function task (){
    console.log(await createAnonUser());
}
)();
*/
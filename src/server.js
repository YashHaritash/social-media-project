const express = require('express');
const app = express();
const {db} = require('./db/model')

//handle post request body
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//handle public folder display
app.use('/',express.static(__dirname+'/public'))

//handling the routes
const userRoute = require("./routes/users/index").route;
const postRoute = require("./routes/posts/index").route;

app.use('/api/users',userRoute);
app.use('/api/posts',postRoute);

//db synchronisation and starting the server
db.sync()
    .then(()=>{
        app.listen(3000,()=>{
            console.log("Server Running on http://localhost:3000");
        })
    })
    .catch((err)=>{
        console.error("Error Syncing DataBase");
    })
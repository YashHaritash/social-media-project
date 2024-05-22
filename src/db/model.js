const Sequelize = require('sequelize');
const db = new Sequelize('socialmediadb','socialuser','socialpass',{
    host : 'localhost',
    dialect : 'mysql'
})

const ID_TYPE = {
    type : Sequelize.DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
}
const USERNAME_TYPE = {
    type : Sequelize.DataTypes.STRING(30),
    unique : true,
    allowNull : false
}

const TITLE_TYPE = {
    type : Sequelize.DataTypes.STRING(140),
    allowNull : false
}

const Users = db.define('user',{
    id : ID_TYPE,
    username : USERNAME_TYPE
})

const Posts = db.define('post',{
    id : ID_TYPE,
    title : TITLE_TYPE,
    body : {
        type : Sequelize.DataTypes.TEXT,
        allowNull : false
    }
})

const Comments = db.define('comment',{
    id : ID_TYPE,
    title : TITLE_TYPE,
    body : {
        type : Sequelize.DataTypes.TEXT('tiny'),
        allowNull : false
    }
})

//Relations
Users.hasMany(Posts);
Posts.hasMany(Comments);
Users.hasMany(Comments);

Comments.belongsTo(Users);
Posts.belongsTo(Users);
Comments.belongsTo(Posts);

module.exports = {
    db,Users,Posts,Comments
}
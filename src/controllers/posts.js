const { where } = require('sequelize');
const {Posts,Users} = require('../db/model');

async function createNewPost(title,body,userId){
    const post = await Posts.create({
        title,body,userId
    })

    return post;
}

async function findAllPosts(){
    //TODO : to handle query parameter

    const posts = Posts.findAll({
        include : [Users]
    })

    return posts;
}

async function findPostsById(id){
    //TODO : to handle query parameter

    const posts = Posts.findAll({
        include : [Users],
        where : {
            userId : id
        }
    })

    return posts;
}

module.exports = {
    createNewPost,findAllPosts,findPostsById
}

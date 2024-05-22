const {Posts,Users} = require('../db/model');

async function createNewPost(title,body,userId){
    const post = await Posts.create({
        title,body,userId
    })

    return post;
}

async function findAllPosts(query){
    //TODO : to handle query parameter

    const posts = Posts.findAll({
        include : [Users]
    })

    return posts;
}

module.exports = {
    createNewPost,findAllPosts
}

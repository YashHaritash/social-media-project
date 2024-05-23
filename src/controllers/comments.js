const { where } = require('sequelize');
const {Users,Posts,Comments} = require('../db/model');

async function addNewComment(title,body,postId,userId){
    const comment =await Comments.create({
        title : title,
        body : body,
        postId : postId,
        userId : userId
    })
    return comment;
}


async function getCommentByPostId(postId){
    const comments = await Comments.findAll({
        where : {
            postId : postId
        }
        ,
        include : [Users,Posts]
    })

    return comments
}

async function getCommentByUserId(userId){
    const comments = await Comments.findAll({
        where : {
            userId : userId
        }
        ,
        include : [Users,Posts]
    })

    return comments
}

module.exports = {
    addNewComment,
    getCommentByPostId,
    getCommentByUserId
}


// // Testing

// async function task(){
//     console.log(await addNewComment("commentTitle2","commentbody2",1,1));
// }
// task();

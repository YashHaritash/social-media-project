const route= require('express').Router()
const {addNewComment,
  getCommentByPostId,
  getCommentByUserId} = require('../../controllers/comments');

//get all comment through params
route.get('/user/:id',async (req,res)=>{
  let comments =await getCommentByUserId(req.params.id);
  res.status(200).send(comments);
})

route.get('/post/:id',async (req,res)=>{
  let comments = await getCommentByPostId(req.params.id);
  res.status(200).send(comments);
})

//add new Comment
route.post('/',async (req,res)=>{

  if(!req.body.title || !req.body.body || !req.body.userId || !req.body.postId ){
    res.status(400).send({
      error : "All the fields are necessary",
      a : `${req.body.title}`,
      b : `${req.body.body}`,
      c : `${req.body.userId}`,
      d : `${req.body.postId}`
    })
  }
  else{
    const comment = await addNewComment(req.body.title,req.body.body,parseInt(req.body.postId),parseInt(req.body.userId));
    res.status(201).send(comment);
  }
  
})



module.exports = {
  route
}
const route = require('express').Router();
const {createNewPost,findAllPosts} = require('../../controllers/posts');

route.get('/',async (req,res)=>{
  const posts = await findAllPosts()
  res.status(200).send(posts);
})

//create new post
route.post('/',async (req,res)=>{
  if(!req.body.title || !req.body.body || !req.body.userId){
    res.status(400).send({
      error: "body title ans userId needed"
    })
  }

  const post  =await createNewPost(
   req.body.title ,
   req.body.body,
   req.body.userId
  )

  res.status(201).send(post);
})


module.exports = {
  route
}
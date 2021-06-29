const Post = require('../models/Post');


//  READ POSTS
exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find()
    res.status(200).send(posts);
  } catch (error) {
    next(error);
  }
}

// ADD POST
exports.addPost = async (req, res, next) => {
  try {
    const post = new Post(req.body);
    await post.save()
    res.status(201).send(post)
  } catch (error) {
    next(error);
  }
}

// DELETE POST
exports.deletePost = async (req, res, next) => {
  const { id } = req.params
  try {
    const post = await Post.findByIdAndDelete(id)
    res.status(200).send('Success')
  } catch (error) {
    console.log(error);
    next(error);
  }
}

// UPDATE POST
exports.updatePost = async (req, res, next) => {
  const { id } = req.params
  console.log(id);
  try {
    const post = await Post.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).send(post);
  } catch (error) {
    next(error);
  }
};
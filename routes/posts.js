const express = require('express');

// create a new Router
const router = express.Router();
const { validateInputs } = require('../middleware/validator');
const { postValidationRules } = require('../lib/validation/postRules');



// Import
const { getPosts, addPost, deletePost, updatePost } = require('../controller/postsController')


router.route('/')
    .get(getPosts)
    .post(validateInputs(postValidationRules), addPost);


router.route("/:id")
    .delete(deletePost)
    .put(validateInputs(postValidationRules), updatePost);


//export router to app.js
module.exports = router;

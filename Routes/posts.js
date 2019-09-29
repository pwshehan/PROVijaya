const express = require('express');
const router = express.Router();
const Post = require('../Models/posts') ;

router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){message: err}
});

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save()
        res.json(savedPost)
    }catch(err){message: err}
});

router.get('/:postId', async (req, res) => {
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){message: err}
});

module.exports = router; 
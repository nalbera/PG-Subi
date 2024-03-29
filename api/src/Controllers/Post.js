const { Post, User } = require('../db.js');

const getPost = async (req, res, next) => {
    try {
        const { id } = req.params;
        let posts
        if (id) {
            posts = await Post.findAll({where:{userEmail: id}});
            res.send(posts)
        }else{
            posts = await Post.findAll();
            return res.send(posts);
        }

    } catch (error) {
        next(error);
    }
}


const setPost = async (req, res, next) => {
    try {
        const {
            date,
            author,
            description,
            calification,
            userEmail
        } = req.body;

        
        let posts = await Post.create({
            
            date,
            author,
            description,
            calification,
        },
        )
        const users = await User.findByPk(userEmail);
        posts = await users.addPost(posts.id);
        
    
        res.send(posts);
    } catch (error) {
        next(error);
    }
}


module.exports = { getPost, setPost };

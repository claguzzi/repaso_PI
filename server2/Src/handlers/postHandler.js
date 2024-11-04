const { createPost, getAllPosts } = require("../controllers/postcontroller");




const getPostHandler = async(req, res) => {
  const posts = await getAllPosts()
  try {
    res.status(200).json(posts)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}




const createPostHandler = async (req, res) => {
  const { title, body, userId } = req.body;
  try {
    const newPost = await createPost(title, body, userId);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.mesagge });
  }

}




module.exports = {
  getPostHandler,
  createPostHandler
}

// const db = require('')

const createPost = (req, res) => {
  console.log("HELLO");

  res.send(req.body);
};

module.exports = createPost;

import mongoos from "mongoose";

const Post = new mongoos.Schema({
  name: {type: String, required: true},
  prompt: {type: String, required: true},
  photo: {type: String, required: true}
})

const PostSchema = mongoos.model('Post', Post)

export default PostSchema

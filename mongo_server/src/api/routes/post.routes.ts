import {Router} from "express";
import {
    create,
    createComment,
    deleteComment,
    deletePost,
    getPosts,
    likePost,
    unLikePost
} from "../controllers/post.controller";

export const router = Router()
    .post('', create)
    .get('', getPosts)
    .delete('/:id', deletePost)
    .put('/like/:id', likePost)
    .put('/unlike/:id', unLikePost)
    .post('/comment/:id', createComment)
    .delete('/comment/:id/:commentID', deleteComment)


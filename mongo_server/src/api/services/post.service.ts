import {Service} from "typedi";
import {Post} from "../models/post.model";
import {CreatePostDTO} from "../dto/post/createPostDTO";
import {ForbiddenError} from "../errors";

@Service()
export class PostService {

    async createPost(createPostDTO: CreatePostDTO, user) {
        const newPost = new Post({
            text: createPostDTO.text,
            name: user.name,
            avatar: user.avatar,
            user: user.id
        });
        return await newPost.save();
    }

    async deletePost(id: string, userID: string) {
        const currentPost = await Post.findById(id);
        if (currentPost.user.toString() !== userID.toString()) {
            throw new ForbiddenError('User cannot delete other user post',
                'unallowed option',
                new Error('Un allowed'));
        }
        await currentPost.remove();
    }

    async getUserPosts(id) {
        return Post.find({user: id});
    }

    async likePost(id: string, userID: string) {
        const post = await Post.findById(id);
        if (post.likes.filter((currentLike) =>
            currentLike.user.toString() === userID).length > 0) {
            throw new ForbiddenError('Already Liked this post', 'Liked this post',
                new Error('Liked this post'));
            //error
        } else {
            post.likes.unshift({user: userID})
            return await post.save();
        }

    }

    async unLikePost(id: string, userID: string) {
        const post = await Post.findById(id);
        if (post.likes.filter((currentLike) =>
            currentLike.user.toString() === userID).length === 0) {
            throw new ForbiddenError('Post not been liked', 'Not Liked this post',
                new Error('Not Liked this post'));
            //error
        } else {
            const removeIndex = post.likes.map(like => like.user.toString()).indexOf(userID);
            post.likes.splice(removeIndex, 1);
            return await post.save();
        }

    }

    async createComment(commentDTO, user, postID: string) {
        const post = await Post.findById(postID);
        const newComment = {
            text: commentDTO.text,
            name: user.name,
            avatar: user.avatar,
            user: user._id
        }
        post.comments.unshift(newComment);
        await post.save();
    }

    async deleteComment(postID: string, commentID: string, userID: string) {
        const post = await Post.findById(postID);
        const comment = post.comments.find((currentComment) => currentComment.id.toString() === commentID);
        if (!comment) {
            // no comment
            return;
        }
        if (comment.user.toString() !== userID) {
            //unauthorized
            return;
        }
        const removeIndex = post.comments.map(comment => comment.user.toString()).indexOf(userID);
        post.comments.splice(removeIndex, 1);
        return await post.save();
    }
}

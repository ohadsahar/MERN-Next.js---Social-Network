import {Request, Response} from 'express';
import {Container} from "typedi";
import {ResHandlerService} from "../services/res-handler.service";
import {PostService} from "../services/post.service";
import {plainToClass} from "class-transformer";
import {IdDTO} from "../dto/util/idDTO";

const resHandlerService = Container.get(ResHandlerService);
const postService = Container.get(PostService);

export const create = async (req: Request, res: Response) => {
    try {
        const result = await postService.createPost(req.body, req.user);
        return resHandlerService.handleSuccess(res, result);
    } catch (error) {
        return resHandlerService.handleError(res, error);
    }
}

export const getPosts = async (req: Request, res: Response) => {
    try {
        const result = await postService.getUserPosts(req.user._id);
        return resHandlerService.handleSuccess(res, result);
    } catch (error) {
        return resHandlerService.handleError(res, error);
    }
}

export const deletePost = async (req: Request, res: Response) => {
    try {
        const transformed = plainToClass(IdDTO, req.params);
        const userID = req.user._id;
        const result = await postService.deletePost(transformed.id, userID);
        return resHandlerService.handleSuccess(res, result);
    } catch (error) {
        return resHandlerService.handleError(res, error);
    }
}


export const likePost = async (req: Request, res: Response) => {
    try {
        const transformed = plainToClass(IdDTO, req.params);
        const userID = req.user.id;
        const result = await postService.likePost(transformed.id, userID);
        return resHandlerService.handleSuccess(res, result);
    } catch (error) {
        return resHandlerService.handleError(res, error);
    }
}

export const unLikePost = async (req: Request, res: Response) => {
    try {
        const transformed = plainToClass(IdDTO, req.params);
        const userID = req.user.id;
        const result = await postService.unLikePost(transformed.id, userID);
        return resHandlerService.handleSuccess(res, result);
    } catch (error) {
        return resHandlerService.handleError(res, error);
    }
}


export const createComment = async (req: Request, res: Response) => {
    try {
        const result = await postService.createComment(req.body, req.user, req.params.id);
        return resHandlerService.handleSuccess(res, result);
    } catch (error) {
        return resHandlerService.handleError(res, error);
    }
}

export const deleteComment = async (req: Request, res: Response) => {
    try {
        const result = await postService.deleteComment(req.params.id, req.params.commentID, req.user.id);
        return resHandlerService.handleSuccess(res, result);
    } catch (error) {
        return resHandlerService.handleError(res, error);
    }
}

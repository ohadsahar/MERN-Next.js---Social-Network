import {Request, Response} from 'express';
import {Container} from "typedi";
import {ResHandlerService} from "../services/res-handler.service";
import {CommentService} from "../services/comment.service";

const resHandlerService = Container.get(ResHandlerService);
const commentService = Container.get(CommentService);

export const create = async (req: Request, res: Response) => {
    try {
        const result = await commentService.create(req.body);
        return resHandlerService.handleSuccess(res, result);
    } catch (error) {
        return resHandlerService.handleError(res, error);
    }
}

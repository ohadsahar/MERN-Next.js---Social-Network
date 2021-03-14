import {Request, Response} from 'express';
import {Container} from "typedi";
import {ResHandlerService} from "../services/res-handler.service";
import {ProfileService} from "../services/profile.service";

const resHandlerService = Container.get(ResHandlerService);
const profileService = Container.get(ProfileService);


export const get = async (req: Request, res: Response) => {
    try {
        const result = await profileService.get();
        return resHandlerService.handleSuccess(res, result);
    } catch (error) {
        return resHandlerService.handleError(res, error);
    }
}
export const getById = async (req: Request, res: Response) => {
    try {
        const profileID = req.user._id;
        const result = await profileService.getById(profileID);
        return resHandlerService.handleSuccess(res, result);
    } catch (error) {
        return resHandlerService.handleError(res, error);
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const userID = req.user._id;
        const result = await profileService.getUserById(userID);
        return resHandlerService.handleSuccess(res, result);

    } catch (error) {
        return resHandlerService.handleError(res, error);
    }
}


export const update = async (req: Request, res: Response) => {
    try {
        const result = await profileService.update(req.body, req.user);
        return resHandlerService.handleSuccess(res, result);
    } catch (error) {
        return resHandlerService.handleError(res, error);
    }
}

export const deleteProfile = async (req: Request, res: Response) => {
    try {
        const userID = req.user._id;
        const result = await profileService.deleteProfile(userID);
        return resHandlerService.handleSuccess(res, result);
    } catch (error) {
        return resHandlerService.handleError(res, error);
    }
}

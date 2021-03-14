import {Request, Response} from 'express';
import {Container} from "typedi";
import {AuthService} from "../services/auth.service";
import {ResHandlerService} from "../services/res-handler.service";
import {plainToClass} from "class-transformer";
import {RegisterDTO} from "../dto/auth/registerDTO";
import {UpdateUserDTO} from "../dto/auth/updateUserDTO";
import {LoginDTO} from "../dto/auth/loginDTO";

const authService = Container.get(AuthService);
const resHandlerService = Container.get(ResHandlerService);


export const login = async (req: Request, res: Response) => {
    try {
        const transformed = plainToClass(LoginDTO, req.body);
        const result = await authService.login(transformed);
        return resHandlerService.handleSuccess(res, result);
    } catch (error) {
        resHandlerService.handleError(res, error);
    }
}

export const register = async (req: Request, res: Response) => {

    try {
        const transformed = plainToClass(RegisterDTO, req.body);
        const result = await authService.register(transformed);
        return resHandlerService.handleSuccess(res, result);
    } catch (error) {
        return resHandlerService.handleError(res, error);
    }

}

export const update = async (req: Request, res: Response) => {
    try {
        const transformed = plainToClass(UpdateUserDTO, {...req.body, ...req.params});
        const result = await authService.update(transformed);
        return resHandlerService.handleSuccess(res, result);
    } catch (error) {
        return resHandlerService.handleError(res, error);
    }
}

export const getMe = async (req: Request, res: Response) => {
    try {
        const userID = req.user._id.toString();
        const result = await authService.getMe(userID);
        return resHandlerService.handleSuccess(res, result);
    } catch (error) {
        return resHandlerService.handleError(res, error);
    }
}



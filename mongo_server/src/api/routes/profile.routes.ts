import {Router} from "express";
import {deleteProfile, get, getById, getUserById, update} from "../controllers/profile.controller";
import {validationMiddleware} from "../middlewares/validation.middleware";
import {CreateProfileDTO} from "../dto/profile/createProfileDTO";
import {IdDTO} from "../dto/util/idDTO";

export const router = Router()
    .get('/userProfile', getById)
    .get('/', get)
    .get('/user/:id', getUserById)
    .put('/', validationMiddleware(CreateProfileDTO), update)
    .delete('/', validationMiddleware(IdDTO), deleteProfile)

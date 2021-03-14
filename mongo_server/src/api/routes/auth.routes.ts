import {Router} from "express";
import multer from 'multer';
import {storage, validationMiddleware} from "../middlewares/validation.middleware";
import {RegisterDTO} from "../dto/auth/registerDTO";
import {getMe, login, register, update} from "../controllers/auth.controller";
import {UpdateUserDTO} from "../dto/auth/updateUserDTO";
import {LoginDTO} from "../dto/auth/loginDTO";
import {isAuthenticatedGuard} from "../guards";

export const router = Router();

const handleProfilePicFile = multer({storage, limits: {fileSize: 8 * 1024 * 1024}}).single('profilePicFile');

router.post('/register', validationMiddleware(RegisterDTO), register)
router.post('/login', validationMiddleware(LoginDTO), login)
router.put('/:id', validationMiddleware(UpdateUserDTO), update)
router.get('/me', isAuthenticatedGuard, getMe)


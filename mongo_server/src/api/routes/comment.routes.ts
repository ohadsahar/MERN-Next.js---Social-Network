import {Router} from "express";
import {create} from "../controllers/comment.controller";

export const router = Router()
    .post('', create)

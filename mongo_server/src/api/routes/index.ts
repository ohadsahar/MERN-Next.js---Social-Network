import {Router} from 'express'
import {router as AuthRoutes} from '../routes/auth.routes';
import {router as ProfileRoutes} from '../routes/profile.routes';
import {router as PostRoutes} from '../routes/post.routes';
import {router as CommentRoutes} from '../routes/comment.routes';
import {isAuthenticatedGuard} from "../guards";


const APIRouter = Router({mergeParams: true});

APIRouter.use('/auth', AuthRoutes);
APIRouter.use('/profile', isAuthenticatedGuard, ProfileRoutes);
APIRouter.use('/post', isAuthenticatedGuard, PostRoutes);
APIRouter.use('/comment', isAuthenticatedGuard, CommentRoutes);

export default APIRouter;

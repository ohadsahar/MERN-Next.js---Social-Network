import {NextFunction, Request, Response} from 'express'
import {Container} from 'typedi'
import {ForbiddenError} from '../errors'
import {EUserType} from "../models/enums";
import {ResHandlerService} from "../services/res-handler.service";

const resService = Container.get(ResHandlerService);


export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user.type === EUserType.Admin) {
    next();
  } else {
    resService.handleError(res, new ForbiddenError('general.error.is_admin', 'error no permissions', new Error('no permissions')));
  }
}

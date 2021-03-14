import {validateJwt} from './validate-jwt.guard'

export const isAuthenticatedGuard = [validateJwt];







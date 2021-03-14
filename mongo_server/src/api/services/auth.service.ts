import * as jwt from 'jsonwebtoken'
import {Service} from 'typedi'
import getConfig from '../../config/env.config'
import {User} from '../models/user.model';
import {RegisterDTO} from "../dto/auth/registerDTO";
import {ForbiddenError, UnauthorizedError} from "../errors";
import {UpdateUserDTO} from "../dto/auth/updateUserDTO";
import gravatar from 'gravatar';
import bcryptjs, {compareSync} from 'bcryptjs';
import {LoginDTO} from "../dto/auth/loginDTO";


@Service()
export class AuthService {
    constructor() {
    }

    createJWT(payload, expiration?: string) {
        let token_expires = getConfig().jwt.token_expires;
        if (expiration)
            token_expires = expiration;
        return jwt.sign(payload, getConfig().jwt.key, {expiresIn: token_expires});
    }

    async login(loginDTO: LoginDTO) {
        const user = await User.findOne({email: loginDTO.email});
        if (!user) {
            throw new UnauthorizedError('UNAUTHORIZED',
                'Username or password are invalid', new Error('wrong credentials'));
        }
        if (!user.password) {
            throw new UnauthorizedError('UNAUTHORIZED',
                'Username or password are invalid', new Error('wrong credentials'));
        }
        const match = compareSync(loginDTO.password, user.password);
        if (!match) {
            throw new UnauthorizedError('UNAUTHORIZED',
                'Username or password are invalid', new Error('wrong credentials'));
        }
        return this.createJWT({id: user.id});
    }

    async register(registerDTO: RegisterDTO) {
        let userExists = await User.findOne({email: registerDTO.email});
        if (userExists) {
            throw new ForbiddenError('Forbidden Error', 'User Already Exis ts', new Error('User Already Exists'));
        }
        const avatar = gravatar.url(registerDTO.email, {s: '200', r: 'pg', d: 'mm'});
        registerDTO.avatar = avatar;
        const salt = await bcryptjs.genSalt(10);
        registerDTO.password = await bcryptjs.hash(registerDTO.password, salt);
        userExists = new User(registerDTO);
        const savedUser = await userExists.save();
        return this.createJWT({id: savedUser.id});
    }

    async update(updateUserDTO: UpdateUserDTO) {
        return User.update(updateUserDTO, {upsert: true});

    }

    async getMe(id: string) {
        return User.findById(id);
    }

}



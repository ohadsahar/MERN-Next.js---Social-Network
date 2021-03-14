import { Service } from 'typedi'
import { FindConditions } from 'typeorm'
import { User } from "../models/user.model";


@Service()
export class UsersService {

    findOne(options: FindConditions<User>) {
        return User.findOne(options);
    }


}

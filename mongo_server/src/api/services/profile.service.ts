import {Service} from "typedi";
import {IProfile, Profile} from "../models/profile.model";
import {ForbiddenError} from "../errors";
import {User} from "../models/user.model";

@Service()
export class ProfileService {

    async get() {
        return Profile.find().populate("user", ['name', 'avatar'])
    }


    async getUserById(userID) {
        const result = await Profile.findOne({user: userID})
            .populate("user", ['name', 'avatar'])
        return result;
    }

    async getById(id) {
        const existsProfile = await Profile.findOne(
            {user: id}).populate('user',
            ['name', 'avatar']);
        if (existsProfile) {
            return existsProfile;
        }
        throw new ForbiddenError('Forbidden Error',
            'Profile Not Exists',
            new Error('Profile Wont Exists'));
    }

    async update(createProfileDTO: IProfile, user) {
        let profile = await Profile.findOne({user: user.id});
        createProfileDTO.user = user.id;
        if (profile) {
            profile = await Profile.findOneAndUpdate(
                {user: user.id},
                {$set: createProfileDTO},
                {new: true}
            )
            return profile;
        } else {
            const profileToUpdate = new Profile(createProfileDTO);
            profile = await profileToUpdate.save();
        }
        return profile;
    }

    async deleteProfile(userID) {
        await User.findOneAndDelete({user: userID});
        await Profile.findOneAndDelete({user: userID});
    }
}

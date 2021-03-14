import {Document, model, Model, Schema} from 'mongoose';
import {IUser} from "./user.model";

export interface IProfile extends Document {
    user: IUser;
    company: string;
    location: string;
    status: string;
    skills: Array<string>;
    bio: string;
    githubusername: string;
    experience: IExperience[];
    education: IEducation[];
    social: ISocial[];
    date: Date;
}

export interface IExperience extends Document {
    title: string;
    company: string;
    location: string;
    from: Date;
    to: Date;
    current: boolean;
    description: string;
}

export interface IEducation extends Document {
    school: string;
    degree: string;
    fieldofstudy: string;
    from: Date;
    to: Date;
    current: boolean;
    description: string;
}

export interface ISocial extends Document {
    youtube: string;
    twitter: string;
    facebook: string;
    linkedin: string;
    instagram: string;
}

const ProfileSchema: Schema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    company: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
    },
    bio: {
        type: String
    },
    githubusername: {
        type: String
    },
    experience: [
        {
            title: {
                type: String,
                required: true
            },
            company: {
                type: String,
                required: true
            },
            location: {
                type: String,
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date,
                required: true
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            }
        }
    ],
    education: [
        {
            school: {
                type: String,
                required: true
            },
            degree: {
                type: String,
                required: true
            },
            fieldofstudy: {
                type: String,
                required: true
            },
            from: {
                type: Date,
                required: true
            },
            to: {
                type: Date,
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String
            }
        }
    ],
    social: [
        {
            youtube: {
                type: String
            },
            twitter: {
                type: String
            },
            facebook: {
                type: String
            },
            linkedin: {
                type: String
            },
            instagram: {
                type: String
            },
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

export const Profile: Model<IProfile> = model('Profile', ProfileSchema);

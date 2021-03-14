import {Document, model, Model, Schema} from "mongoose";
import {IUser} from "./user.model";

export interface IPost extends Document {
    user: IUser;
    text: string;
    name: string;
    avatar: string;
    likes:any;
    comments: any;
};

export interface ILike extends Document {
    user: IUser;
}

export interface IComments extends Document {

    user: IUser[];
    text: string;
    name: string;
    avatar: string;
    date: Date;

}

const PostSchema: Schema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    avatar: {
        type: String
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "users",
            },
        }
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "users"
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String,
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

export const Post: Model<IPost> = model("Post", PostSchema);

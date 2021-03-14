import {IsOptional, IsString} from "class-validator";
import {IUser} from "../../models/user.model";
import {IEducation, IExperience, ISocial} from "../../models/profile.model";

export class CreateProfileDTO {

    @IsString()
    status: string;

    @IsString({each: true})
    skills: Array<string>;

    user: IUser | string;

    company: string;

    @IsOptional()
    location: string;

    @IsOptional()
    bio: string;

    @IsOptional()
    githubusername: string;

    @IsOptional()
    experience: IExperience[];

    @IsOptional()
    education: IEducation[];

    @IsOptional()
    social: ISocial[];

    @IsOptional()
    date: Date;
}

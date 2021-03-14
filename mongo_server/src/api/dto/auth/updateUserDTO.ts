import {IsEmail, IsOptional, IsString} from "class-validator";

export class UpdateUserDTO {

    @IsString()
    id: string;

    @IsString()
    @IsOptional()
    name: string;

    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    password: string;

    @IsString()
    @IsOptional()
    avatar: string;

}

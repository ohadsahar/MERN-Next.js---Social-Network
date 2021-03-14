import {IsEmail, IsNumber, IsOptional, IsString} from "class-validator";
import {Transform, Type} from "class-transformer";

export class EditUserDTO {
    @IsString()
    fullName: string;

    @IsString()
    companyName: string;

    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    password: string;

    @IsOptional()
    @IsString()
    newPassword: string;
}

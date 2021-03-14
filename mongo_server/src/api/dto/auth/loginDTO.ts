import {IsEmail, IsString} from "class-validator";
import {Transform} from "class-transformer";
import {mailTransformer} from "../../utils/mail.transformer";

export class LoginDTO {
    @IsEmail()
    @Transform(mailTransformer)
    email: string;

    @IsString()
    password: string;

}

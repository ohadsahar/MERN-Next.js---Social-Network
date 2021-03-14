import {IsString} from "class-validator";
import {Transform} from "class-transformer";
import {mailTransformer} from "../../utils/mail.transformer";

export class ForgotPasswordDTO {
    @IsString()
    @Transform(mailTransformer)
    email: string;
}
import {IsNotEmpty, IsString} from "class-validator";

export class ResetPasswordDTO {
    @IsNotEmpty()
    token: string;

    @IsString()
    @IsNotEmpty()
    password: string;

}

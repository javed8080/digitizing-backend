import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDate, IsNumber, IsOptional, IsEnum, IsEmail } from "class-validator";

export class CreateAuthDto {
  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @ApiProperty()
  password: string;

  user:any
}

import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
    @ApiProperty({ example: 'john_doe', description: 'The username' })
    username: string;
  
    @ApiProperty({ example: 'password123', description: 'The password' })
    password: string;
  }
  
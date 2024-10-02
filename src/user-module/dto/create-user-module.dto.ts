import { ApiProperty } from "@nestjs/swagger";

export class CreateUserModuleDto {
    @ApiProperty()
    name: string;
}

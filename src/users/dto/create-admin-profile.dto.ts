import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/enums/role";
import { Status } from "src/enums/status";

export class CreateAdminProfileDto {
    @ApiProperty()
    name: string;
   
}

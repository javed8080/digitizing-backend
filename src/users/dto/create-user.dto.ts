import { ApiProperty } from "@nestjs/swagger";
import { Role } from "src/enums/role";
import { Status } from "src/enums/status";
import { CreateCustomerProfileDto } from "./create-customer-profile.dto";
import { CreateAdminProfileDto } from "./create-admin-profile.dto";
import { IsOptional } from "class-validator";



export class Permissions {
    @ApiProperty()
    read: boolean;
    @ApiProperty()
    write: boolean;
    @ApiProperty()
    update: boolean;
    @ApiProperty()
    delete: boolean;
}

export class ModulePermissionDTO {
    @ApiProperty()
    moduleId: string; // You can use the ID of the referenced module here
    @ApiProperty()
    permissions: Permissions;
}

export class CreateUserDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    status: Status;

    @ApiProperty()
    role: Role;

    activation_code: String;

    is_verfied: boolean;

    @ApiProperty()
    profile: CreateCustomerProfileDto

    created_at: String
    
    @IsOptional()
    @ApiProperty({ type: ModulePermissionDTO, isArray: true })
    modulePermissions: ModulePermissionDTO[];
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserModuleDto } from 'src/user-module/dto/create-user-module.dto';

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
    module:CreateUserModuleDto;
    @ApiProperty()
    permissions:Permissions;
}


export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty()
    name: string;
    @ApiProperty({ type: ModulePermissionDTO, isArray: true })
    modulePermissions: ModulePermissionDTO[];

}


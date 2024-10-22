import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { Role } from 'src/enums/role';
import { Status } from 'src/enums/status';
import { CreateCustomerProfileDto } from './create-customer-profile.dto';

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
  moduleId: string;
  permissions: Permissions;
}

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  status: Status;

  @ApiProperty()
  @IsNotEmpty()
  role: Role;

  @IsNotEmpty()
  activation_code: String;

  @IsNotEmpty()
  is_verified: boolean;

  @ApiProperty()
  @IsNotEmpty()
  profile: CreateCustomerProfileDto;

  @IsOptional()
  @ApiProperty({ type: ModulePermissionDTO, isArray: true })
  modulePermissions: ModulePermissionDTO[];
}

export class CreateClientDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsIn([Role.customer])
  role: string;
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GlobalExceptionFilter } from 'src/utils/global-exception.filter';
import { databaseProviders } from './database.providers'; // Provide the correct path
import { ErrorLog, ErrorLogSchema } from './schema/error.schema';

@Module({
  imports: [
    ...databaseProviders,

    MongooseModule.forFeature([
      { name: ErrorLog.name, schema: ErrorLogSchema },
    ]),
  ],

  providers: [GlobalExceptionFilter],
  exports: [MongooseModule],
})
export class DatabaseModule {}

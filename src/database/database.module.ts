import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers'; // Provide the correct path

@Module({
  imports: [...databaseProviders],
  providers: [],
  exports: [],
})
export class DatabaseModule {}

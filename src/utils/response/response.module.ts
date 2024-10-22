import { Global, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ResponseHelper } from './response.helper';

@Global()
@Module({
  imports: [DatabaseModule],
  providers: [ResponseHelper],
  exports: [ResponseHelper],
})
export class ResponseModule {}

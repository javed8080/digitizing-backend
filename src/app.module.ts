import { Module } from '@nestjs/common';
import { AppConfigModule } from './app-config/app-config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { InvoiceModule } from './invoice/invoice.module';
import { OrderModule } from './order/order.module';
import { QuoteModule } from './quote/quote.module';
import { UserModuleModule } from './user-module/user-module.module';
import { UsersModule } from './users/users.module';
import { ResponseModule } from './utils/response/response.module';

@Module({
  imports: [
    DatabaseModule,
    ResponseModule,
    UsersModule,
    UserModuleModule,
    QuoteModule,
    OrderModule,
    InvoiceModule,
    AuthModule,
    AppConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { UserModuleModule } from './user-module/user-module.module';
import { QuoteModule } from './quote/quote.module';
import { OrderModule } from './order/order.module';
import { InvoiceModule } from './invoice/invoice.module';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule } from './app-config/app-config.module';


@Module({

  imports: [DatabaseModule,UsersModule, UserModuleModule, QuoteModule, OrderModule, InvoiceModule, AuthModule , AppConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { AuthService } from './auth/shared/auth.service';
import { JwtService } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobOffersModule } from './job_offers/job_offers.module';

import { MongooseModule } from '@nestjs/mongoose'
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb+srv://andregom:<myPassWordWasNeverHere>@cluster0.qoliich.mongodb.net/?retryWrites=true&w=majority'),
    JobOffersModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AuthService,
    AppService,
    JwtService
  ],
})
export class AppModule { }

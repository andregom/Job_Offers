import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JobOffersModule } from './job_offers/job_offers.module';

import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://andregom:FS0eqGDM1ED1Suas@cluster0.qoliich.mongodb.net/?retryWrites=true&w=majority'),
    JobOffersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

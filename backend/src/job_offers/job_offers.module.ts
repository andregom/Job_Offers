import { Module } from '@nestjs/common';
import { JobOffersController } from './job_offers.controller';
import { JobOffersService } from './shared/job_offers.service';
import { JobOfferSchema } from './schemas/job_offers.schema';

import { MongooseModule } from '@nestjs/mongoose'

@Module({
    imports: [
        MongooseModule.forFeature([ { name: 'JobOffer', schema: JobOfferSchema }])
    ],
    controllers: [JobOffersController],
    providers: [JobOffersService]
})

export class JobOffersModule {}

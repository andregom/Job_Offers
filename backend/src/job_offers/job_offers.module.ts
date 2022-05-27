import { Module } from '@nestjs/common';
import { JobOffersController } from './job_offers.controller';
import { JobOffersService } from './shared/job_offers.service';

@Module({
    controllers: [JobOffersController],
    providers: [JobOffersService]
})

export class JobOffersModule {}

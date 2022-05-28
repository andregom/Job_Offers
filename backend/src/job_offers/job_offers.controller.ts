import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { JobOffer } from './shared/job_offers';
import { JobOffersService } from './shared/job_offers.service';

@Controller('job-offers')
export class JobOffersController {

    constructor(
        private jobOfferService: JobOffersService
    ) { }

    @Get()
    async getAll(): Promise<JobOffer[]> {
        return this.jobOfferService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<JobOffer> {
        return this.jobOfferService.getById(id);
    }
    
    @Post()
    async create(@Body() JobOffer: JobOffer): Promise<JobOffer> {
        return this.jobOfferService.create(JobOffer);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() JobOffer: JobOffer): Promise<JobOffer> {
        JobOffer.id = id;
        return this.jobOfferService.update(JobOffer);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        this.jobOfferService.delete(id);
    }
}
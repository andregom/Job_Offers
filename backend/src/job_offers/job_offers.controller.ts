import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { JobOffer } from './shared/job_offers';
import { JobOffersService } from './shared/job_offers.service';

@Controller('job-offers')
export class JobOffersController {

    constructor(
        private jobOfferService: JobOffersService,
    ) { }

    @Get()
    async getAll(): Promise<JobOffer[]> {
        return this.jobOfferService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<JobOffer> {
        return this.jobOfferService.getById(id);
    }
    
    @Post()
    async create(@Body() JobOffer: JobOffer): Promise<JobOffer> {
        return this.jobOfferService.create(JobOffer);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() RecivedJobOffer: JobOffer): Promise<JobOffer> {
        RecivedJobOffer.id = id;
        let jobOffer = new JobOffer();
        try {
            jobOffer = await this.jobOfferService.update(id, RecivedJobOffer);
        } catch (error) {
            console.log(error);
        }
        return jobOffer;
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.jobOfferService.delete(id);
    }
}
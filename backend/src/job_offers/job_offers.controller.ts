import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JobOffer } from './shared/job_offers';
import { JobOffersService } from './shared/job_offers.service';

import { SeniorityValues } from "../../../shared/interafces/enums/seniority_values";

@Controller('job-offers')
export class JobOffersController {

    constructor(
        private jobOfferService: JobOffersService,
    ) { }

    @Get()
    async getAll(): Promise<JobOffer[]> {
        const jobOffer = new JobOffer();
        console.log(jobOffer);
        console.log(SeniorityValues);
        return this.jobOfferService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<JobOffer> {
        return this.jobOfferService.getById(id);
    }

    @Post()
    @UseInterceptors(FileInterceptor('img'))
    async create(@UploadedFile() imgLogoFile, @Body() jobOfferJSONValues: JobOffer): Promise<JobOffer> {
        jobOfferJSONValues.imgLogo = imgLogoFile;
        const jobOffer: JobOffer = JSON.parse(JSON.stringify(jobOfferJSONValues))
        console.log(jobOffer);
        return this.jobOfferService.create(jobOfferJSONValues);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() jobOfferWithUpdatedValues: JobOffer): Promise<JobOffer> {
        jobOfferWithUpdatedValues.id = id;
        try {
            return await this.jobOfferService.update(id, jobOfferWithUpdatedValues);
        } catch (error) {
            console.log(error);
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.jobOfferService.delete(id);
    }
}
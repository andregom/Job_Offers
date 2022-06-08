import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UploadedFile,
    UseInterceptors,
    UseGuards
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { JobOffer } from './shared/job_offers';
import { JobOffersService } from './shared/job_offers.service';


@Controller('job-offers')
export class JobOffersController {

    constructor(
        private jobOfferService: JobOffersService,
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(): Promise<JobOffer[]> {
        return this.jobOfferService.getAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getById(@Param('id') id: string): Promise<JobOffer> {
        return this.jobOfferService.getById(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @UseInterceptors(FileInterceptor('img'))
    async create(@UploadedFile() imgLogoFile, @Body() jobOfferJSONValues: JobOffer): Promise<JobOffer> {
        jobOfferJSONValues.imgLogo = imgLogoFile;
        return this.jobOfferService.create(jobOfferJSONValues);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    async update(@Param('id') id: string, @Body() jobOfferWithUpdatedValues: JobOffer): Promise<JobOffer> {
        jobOfferWithUpdatedValues.id = id;
        try {
            return await this.jobOfferService.update(id, jobOfferWithUpdatedValues);
        } catch (error) {
            console.log(error);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: string) {
        this.jobOfferService.delete(id);
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete()
    async deleteMany() {
        this.jobOfferService.deleteMany();
    }
}
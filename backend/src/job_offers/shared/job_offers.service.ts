import { Injectable } from '@nestjs/common';
import { JobOffer } from './job_offers';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class JobOffersService {
    /* jobOffers: JobOffer[] = [
        {
            id: 1,
            title: "Especialista em Engenharia de dados",
            seniority: "Especialista",
            status: "Open",
            localtion: "Brasília, Distrito Federal, Brasil",
            workScheduleType: "Full-Time",
            openSince: new Date()
        },
        {
            id: 2,
            title: "Recepção",
            seniority: "Júnior",
            status: "Open",
            localtion: "São Paulo, São Paulo, Brasil",
            workScheduleType: "Full-Time",
            openSince: new Date()
        },
        {
            id: 3,
            title: "Desenvolvedor FullStack",
            seniority: "Pleno",
            status: "Open",
            localtion: "Brasília, Distrito Federal, Brasil",
            workScheduleType: "Full-Time",
            openSince: new Date()
        },
        {
            id: 4,
            title: "Vendedor",
            seniority: "Júnior",
            status: "Open",
            localtion: "Rio De Janeiro, Rio de Janeiro, Brasil",
            workScheduleType: "Full-Time",
            openSince: new Date()
        },
        {
            id: 5,
            title: "Operador de Call Center",
            seniority: "Operacional",
            status: "Paused",
            localtion: "Pernambuco, Recife, Brasil",
            workScheduleType: "Full-Time",
            openSince: new Date()
        },
        {
            id: 6,
            title: "Administrador de dados",
            seniority: "Sênior",
            status: "Open",
            localtion: "Remoto",
            workScheduleType: "Full-Time",
            openSince: new Date()
        },
        {
            id: 7,
            title: "Arquiteto de Software",
            seniority: "Mestre",
            status: "Open",
            localtion: "Remoto",
            workScheduleType: "Full-Time",
            openSince: new Date()
        },
    ]; */

    constructor(@InjectModel('JobOffer') private readonly JobOfferModel: Model<JobOffer> ) {  }

    async getAll() {
        return await this.JobOfferModel.find().exec();
    }

    async getById(id: string) {
        return await this.JobOfferModel.findById(id).exec();

    }

    async create(jobOffer: JobOffer) {
        const createdJobOffer = new this.JobOfferModel(jobOffer);
        return await createdJobOffer.save();
    }

    async update(id: string, jobOffer: JobOffer) {
        return await this.JobOfferModel.findOneAndUpdate({ _id: id }, jobOffer).exec();
    }

    async delete(id: string) {
        return await this.JobOfferModel.deleteOne({ _id: id }).exec();
    }

}

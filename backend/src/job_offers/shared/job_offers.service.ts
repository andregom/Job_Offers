import { Injectable } from '@nestjs/common';
import { JobOffer } from './job_offers';


@Injectable()
export class JobOffersService {
    jobOffers: JobOffer[] = [
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
    ];

    getAll() {
        return this.jobOffers
    }

    getById(id: number) {
        const jobOffer = this.jobOffers.find((job) => job.id == id);
        return jobOffer;
    }

    create(jobOffer: JobOffer) {
        let lastId = 0;
        lastId = this.jobOffers[this.jobOffers.length - 1].id;
        
        jobOffer.id = lastId + 1;
        this.jobOffers.push(jobOffer);

        return jobOffer;
    }

    update(jobOffer: JobOffer) {
        const jobOfferFound = this.getById(jobOffer.id);
        if (jobOfferFound) {
            jobOfferFound.title = jobOffer.title;
            jobOfferFound.seniority = jobOffer.seniority;
            jobOfferFound.status = jobOffer.status;
            jobOfferFound.localtion = jobOffer.localtion;
            jobOfferFound.workScheduleType = jobOffer.workScheduleType;
            jobOfferFound.openSince = jobOffer.openSince;
        }

        return jobOfferFound;
    }

    delete(id: number) {
        const index = this.jobOffers.findIndex((job) => job.id == id);
        this.jobOffers.splice(index, 1);
    }

}

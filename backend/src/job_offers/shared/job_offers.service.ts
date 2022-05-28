import { Injectable } from '@nestjs/common';
import { JobOffers } from './job_offers';


@Injectable()
export class JobOffersService {
    job_offers: JobOffers[] = [
        {
            id: 1,
            title: "Especialista em Engenharia de dados",
            seniority: "Especialista",
            status: "Open",
            localtion: "Brasília, Distrito Federal, Brasil",
            workScheduleType: "Full-Time",
            openSince: new Date()
        },
    ];
}

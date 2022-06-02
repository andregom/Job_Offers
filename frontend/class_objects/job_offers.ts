import { seniority } from "../../shared/interafces/seniority_levels";
import { WorkScheduleType } from "../../shared/interafces/work_schedule_type";
import { IJobOffer } from "../../shared/interafces/job_offers";
import { status } from "../../shared/interafces/status";

export class JobOffer
    implements IJobOffer {
    id: string;
    title: string;
    seniority: seniority;
    status: status;
    localtion: string;
    workScheduleType: WorkScheduleType;
    openSince: Date;
    details?: string;

    constructor(id: string = "", title: string = "", seniority: seniority = "Júnior", status: status = "Open", localtion: string = "", workScheduleType: WorkScheduleType = "Full-Time", openSince: Date = new Date()) {
        this.id = id;
        this.title = title;
        this.seniority = seniority;
        this.status = status;
        this.localtion = localtion;
        this.workScheduleType = workScheduleType;
        this.openSince = openSince;
    }
}

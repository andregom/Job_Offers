import { seniority } from "../../shared/interafces/seniority_levels";
import { workScheduleType } from "../../shared/interafces/work_schedule_type";
import { IJobOffer } from "../../shared/interafces/job_offers";
import { status } from "../../shared/interafces/status";

export class JobOffer
    implements IJobOffer {
    id: string;
    imgLogo?: File;
    enterprise?: string;
    position: string;
    seniority: seniority;
    status: status;
    localtion: string;
    workScheduleType: workScheduleType;
    openSince: Date;
    details?: string;

    constructor(id: string = "", enterprise: string = "", position: string = "", seniority: seniority = "Júnior", status: status = "Open", localtion: string = "", workScheduleType: workScheduleType = "Full-Time", openSince: Date = new Date()) {
        this.id = id;
        this.enterprise = enterprise;
        this.position = position;
        this.seniority = seniority;
        this.status = status;
        this.localtion = localtion;
        this.workScheduleType = workScheduleType;
        this.openSince = openSince;
    }
}

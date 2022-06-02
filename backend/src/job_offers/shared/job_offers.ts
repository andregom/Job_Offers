import { Document } from "mongoose";

import { seniority } from "interafces/seniority_levels";
import { WorkScheduleType } from "interafces/work_schedule_type";
import { IJobOffer } from "interafces/job_offers";
import { status } from "interafces/status";

export class JobOffer
    extends Document
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
        super();
        this.id = id;
        this.title = title;
        this.seniority = seniority;
        this.status = status;
        this.localtion = localtion;
        this.workScheduleType = workScheduleType;
        this.openSince = openSince;
    }
}

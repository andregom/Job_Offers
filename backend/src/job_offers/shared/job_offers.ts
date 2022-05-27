import { ISeniority } from "interafces/seniority_levels";
import { IWorkScheduleType } from "interafces/work_schedule_type";
import { IStatus } from "interafces/status";

export class JobOffers {
    id: number;
    title: string;
    seniority: ISeniority;
    status: IStatus;
    localtion: string;
    workScheduleType: IWorkScheduleType;
    openSince: Date;
    details?: string;
}

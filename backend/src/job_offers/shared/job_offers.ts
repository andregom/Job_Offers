import { ISeniorityLevel, seniority  } from "interafces/seniority_levels";
import { IWorkScheduleType, WorkScheduleType } from "interafces/work_schedule_type";
import { status } from "interafces/status";

export class JobOffers implements ISeniorityLevel, IWorkScheduleType {
    id: number;
    title: string;
    seniority: seniority;
    status: status;
    localtion: string;
    workScheduleType: WorkScheduleType;
    openSince: Date;
    details?: string;
}

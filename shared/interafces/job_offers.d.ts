import { ISeniorityLevel, seniority } from "./seniority_levels";
import { IWorkScheduleType, WorkScheduleType } from "./work_schedule_type";
import { status } from "./status";

export interface IJobOffer extends ISeniorityLevel, IWorkScheduleType {
    id: string;
    imgLogo?: File;
    enterprise?: string;
    title: string;
    seniority: seniority;
    status: status;
    localtion: string;
    workScheduleType: WorkScheduleType;
    openSince: Date;
    details?: string;
}
import { ISeniorityLevel, seniority } from "interafces/seniority_levels";
import { IWorkScheduleType, WorkScheduleType } from "interafces/work_schedule_type";
import { status } from "interafces/status";

export interface IJobOffer
    implements ISeniorityLevel, IWorkScheduleType {
    id: string;
    title: string;
    seniority: ISeniority;
    status: IStatus;
    localtion: string;
    workScheduleType: WorkScheduleType;
    openSince: Date;
    details?: string;
}
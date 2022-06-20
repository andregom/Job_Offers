import { ISeniorityLevel, seniority } from "./seniority_levels";
import { IWorkScheduleType, WorkScheduleType } from "./work_schedule_type";
import { IImageLogo, ImgLogo } from "./imageLogo";
import { status } from "./status";

export interface IJobOffer extends
    IImageLogo,
    ISeniorityLevel,
    IWorkScheduleType {
    id: string;
    imgLogo?: File | ImgLogo;
    enterprise?: string;
    position: string;
    seniority: seniority;
    status: status;
    localtion: string;
    workScheduleType: WorkScheduleType;
    openSince: Date;
    details?: string;
}
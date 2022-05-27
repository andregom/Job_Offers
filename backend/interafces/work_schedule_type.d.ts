export enum WorkScheduleTypes {
   FullTime = 'Full-Time',
   PartTime = 'Part-Time',
   Flexible = 'Flexible' | 'Flexible Hours',
   Other = 'Other',
}

export interface IWorkScheduleType {
    param: WorkScheduleTypes
}
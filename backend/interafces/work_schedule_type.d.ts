export type WorkScheduleType =
   'Full-Time'
   | 'Part-Time'
   | 'Flexible' | 'Flexible Hours'
   | 'Other';


export interface IWorkScheduleType {
   workScheduleType: WorkScheduleType
}
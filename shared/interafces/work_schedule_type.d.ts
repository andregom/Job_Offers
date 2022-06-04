const literal = <L extends string | number | boolean>(l: L) => l;

export const WorkScheduleType = {
   FullTime = literal('Full-Time'),
   PartTime = literal('Part-Time'),
   Flexible = literal('Flexible'),
   FlexibleHours = literal('Flexible Hours'),
   Other = literal('Other'),
}

export type workScheduleType = (typeof WorkScheduleType)[keyof typeof WorkScheduleType]

/* export type workScheduleType =
     'Full-Time'
   | 'Part-Time'
   | 'Flexible' | 'Flexible Hours'
   | 'Other';
 */

export interface IWorkScheduleType {
   workScheduleType: workScheduleType
}
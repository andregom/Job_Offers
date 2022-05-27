export enum StatusValues {
   Open = 'Open',
   Closed = 'Closed',
   Paused = 'Paused'
}

export interface IStatus {
    param: StatusValues
}
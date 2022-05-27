export enum SeniorityLevels {
   Junior = 'Júnior',
   Pleno = 'Pleno',
   Senior = 'Sênior',
   Operacional = 'Operacional',
   Tecnico = 'Técnico',
   Trainee = 'Trainee',
   Especialista = 'Especialista',
   Estagiario = 'Estagiário',
   Outro = 'Outro',
}

export interface ISeniority {
    param: SeniorityLevels
}
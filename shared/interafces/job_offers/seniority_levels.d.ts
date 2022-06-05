const literal = <L extends string | number | boolean>(l: L) => l;

export const Seniority = {
   Junior = literal('Júnior'),
   Pleno = literal('Pleno'),
   Senior = literal('Sênior'),
   Operacional = literal('Operacional'),
   Tecnico = literal('Técnico'),
   Trainee = literal('Trainee'),
   Especialista = literal('Especialista'),
   Estagiario = literal('Estagiário'),
   Outro = literal('Outro'),
}

/* export type seniority =
    "Júnior"
   | "Pleno"
   | "Sênior"
   | "Operacional"
   | "Técnico"
   | "Trainee"
   | "Especialista"
   | "Estagiário"
   | "Outro"
   | "Mestre" */
     
export type seniority = (typeof Seniority)[keyof typeof Seniority]

export interface ISeniorityLevel {
   seniority: seniority
}
export type seniority =
    "Júnior"
   | "Pleno"
   | "Sênior"
   | "Operacional"
   | "Técnico"
   | "Trainee"
   | "Especialista"
   | "Estagiário"
   | "Outro"

export interface ISeniorityLevel {
   seniority: seniority
}
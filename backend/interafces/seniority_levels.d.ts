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
   | "Mestre"

export interface ISeniorityLevel {
   seniority: seniority
}
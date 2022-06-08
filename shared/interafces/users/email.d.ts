export type email = `${string}@${string}.${'com'}${''}`
                    | `${string}@${string}.${'com.br'}${''}`
                    | `${string}@${string}.${'gov.br'}${''}`
                    | `${string}@${string}.${string}.${string}.${'br'}`;

export interface IEmail {
    email: email
}
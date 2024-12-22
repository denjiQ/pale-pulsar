export type User = {
    password: string
    name: string
}

type Users = User[]

export const users: { [key: string]: User } = {
    "test": {
        password: "test",
        name: "test",
    }
} as const

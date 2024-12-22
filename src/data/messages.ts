import type { channels } from "./channels"
import { users, type User } from "./users"

type Message = {
    content: string
    timestamp: string
    user: User
}
type c = typeof channels[number]
export const messages: { [key in c]: Message[] } = {

    "GNO911": [
        {
            content: "",
            timestamp: "",
            user: users.test
        }
    ],
    "GT0192": [
        {
            content: "",
            timestamp: "",
            user: users.test
        }
    ]

}
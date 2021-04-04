import { User } from "../entity/User";

export interface UserGateway {
    createUser(user: User): Promise<void>;
    login(name: string, password: string): Promise<User | undefined>;
}
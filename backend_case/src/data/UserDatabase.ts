import { User } from "../business/entity/User";
import { UserGateway } from "../business/gateway/UserGateway";
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase implements UserGateway {

    private mapUserToDbUser(input?: any): User | undefined {
        return (
            input &&
            new User(
                input.id,
                input.code,
                input.name,
                input.cpf,
                input.address,
                input.phoneNumber,
                input.password,
                input.obs
            )
        )
    }


    public async createUser(user: User): Promise<void> {
        await this.connection.raw(`
        INSERT INTO user_sistema_info (id, code, name, cpf, address, phoneNumber, password, obs)
        VALUES (
        '${user.getId()}',
        '${user.getCode()}',
        '${user.getName()}',
        '${user.getCPF()}',
        '${user.getAddress()}',
        '${user.getPhoneNumber()}',
        '${user.getPassword()}',
        '${user.getObs()}'
        )
        `)
    }


    public async login(name: string, password: string): Promise<User | undefined> {
        const user = await this.connection.raw(`
    SELECT * 
    FROM user_sistema_info 
    WHERE name='${name}' AND password='${password}'
    `)

        if (!user[0][0]) {
            return undefined;
        }

        return await this.mapUserToDbUser(user[0][0]);
    }


}
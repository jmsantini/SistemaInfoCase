import { User } from "../entity/User";
import { IdGenerator } from "../gateway/IdGenerator";
import { UserGateway } from "../gateway/UserGateway";

export class CreateUserUC {
    constructor(
        private userGateway: UserGateway,
        private idGenerator: IdGenerator
    ) { }

    private validateInput(input: CreateUserUCInput) {
        if (
            !input.code ||
            !input.name ||
            !input.cpf ||
            !input.password
        ) {
            throw new Error("Invalid input")
        }
    }

    public async execute(input: CreateUserUCInput): Promise<CreateUserUCOutput> {
        this.validateInput(input)

        const user = new User(
            this.idGenerator.generate(),
            input.code,
            input.name,
            input.cpf,
            input.address,
            input.phoneNumber,
            input.password,
            input.obs
        );

        await this.userGateway.createUser(user)

        return {
            message: "User created successfully"
        }
    }
}


interface CreateUserUCInput {
    code: number;
    name: string;
    cpf: string;
    address: string;
    phoneNumber: string;
    password: string;
    obs: string;
}

interface CreateUserUCOutput {
    message: string;
}
import { AuthenticationGateway } from "../gateway/authenticationGateway";
import { UserGateway } from "../gateway/UserGateway";

export class LoginUC {
    constructor(
        private userGateway: UserGateway,
        private authenticationGateway: AuthenticationGateway,
    ) { }


    public async execute(input: LoginUCInput): Promise<LoginUCOutput> {

        if (!input.name || !input.password) {
            throw new Error("Email or password empty");
        };

        const user = await this.userGateway.login(input.name, input.password);

        if (!user) {
            throw new Error("User not found")
        };

        const accessToken = this.authenticationGateway.generateToken({
            id: user.getId(),
            name: user.getName()
        }, "1h" as string)


        return {
            message: "User Logged ",
            accessToken: accessToken
        }
    }
}


interface LoginUCInput {
    name: string;
    password: string;
}

interface LoginUCOutput {
    message: string;
    accessToken: string;
}
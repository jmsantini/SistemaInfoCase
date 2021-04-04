import * as jwt from "jsonwebtoken";
import { AuthenticationGateway, UsersInfoForToken } from "../gateway/authenticationGateway";

export class JwtAuthorizer implements AuthenticationGateway {
    private JWT_SECRET: string = "teste" || "";

    public generateToken(input: UsersInfoForToken, expiresIn: string): string {
        const token = jwt.sign(
            {
                id: input.id,
                name: input.name
            },
            this.JWT_SECRET,
            {
                expiresIn
            }
        );

        return token;
    }

    public getUsersInfoFromToken(token: string): UsersInfoForToken {

        const result = jwt.verify(token, this.JWT_SECRET) as UsersInfoForToken;
        return {
            id: result.id,
            name: result.name
        };
    }
}
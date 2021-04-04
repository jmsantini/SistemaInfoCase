import { Request, Response } from "express";
import { LoginUC } from "../../business/usecases/Login"
import { JwtAuthorizer } from "../../business/services/jwt"
import { UserDatabase } from "../../data/UserDatabase";

export const LoginEndpoint = async (req: Request, res: Response) => {
    try {
        const loginUC = new LoginUC(new UserDatabase(), new JwtAuthorizer());

        const result = await loginUC.execute({
            name: req.body.name,
            password: req.body.password
        })

        res.status(200).send(result)
    } catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
}
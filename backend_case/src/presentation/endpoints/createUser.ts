import { Request, Response } from "express";
import { UuidGenerator } from "../../business/services/UuidGenerator";
import { CreateUserUC } from "../../business/usecases/CreateUser";
import { UserDatabase } from "../../data/UserDatabase";

export const createUserEndpoint = async (req: Request, res: Response) => {
    try {
        const uc = new CreateUserUC(
            new UserDatabase(),
            new UuidGenerator()
        );

        const result = await uc.execute({
            code: req.body.code,
            name: req.body.name,
            cpf: req.body.cpf,
            address: req.body.address,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password,
            obs:req.body.obs
        })

        res.status(200).send(result)
    } catch (err) {
        res.status(400).send({
            message: err.message
        })
    }
};
import knex from "knex";

export abstract class BaseDatabase {
    protected connection = knex({
        client: "mysql",
        connection: {
            host: "ec2-3-85-105-59.compute-1.amazonaws.com",
            port: 3306,
            user: "joao",
            password: "123456",
            database: "DBSemana20"
        }
    });
}
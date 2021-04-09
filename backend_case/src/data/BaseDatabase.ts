import knex from "knex";

export abstract class BaseDatabase {
    protected connection = knex({
        client: "mysql",
        connection: {
            host: "",
            port: 3306,
            user: "",
            password: "",
            database: ""
        }
    });
}

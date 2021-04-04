import { AddressInfo } from "node:net";
import app from "./presentation/router";

const server = app.listen(process.env.PORT || 3100, () =>{
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server running on http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server`)
    }
});


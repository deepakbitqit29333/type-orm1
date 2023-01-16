
import {createConnection} from 'typeorm';
import {Client} from "./entity/client";
import {Banker} from "./entity/Banker";
import {Transaction} from "./entity/Transaction";
import {User} from "./entity/User";
import {Profile} from "./entity/Profile";
import {Photo} from "./entity/Photo";

import express from 'express';
import {createClientRouter} from "./routes/create_client";
import {createBankerRouter} from "./routes/banker_route";
import {createTransactionRouter} from "./routes/create_transaction";
import {connectBankerToClient} from "./routes/connect_banker_to_client";
import {deleteClient} from "./routes/delete_client";
const app=express();
const main= async ()=>{
    try{
        await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '12345678',
            database: 'typeorm',
            entities:{Client,Banker,Transaction,User,Profile,Photo},
            synchronize:true,
            logging: false
        });

        console.log("connected to Database");
        app.use(express.json());
        app.use(createClientRouter)
        app.use(createBankerRouter)
        app.use(createTransactionRouter);
        app.use(connectBankerToClient);
        app.use(deleteClient)
        const port=9091;
        app.listen(port,()=>{
            console.log(`now running on port ${port}`);
        })
    }
    catch (error){
        console.log(error);
        throw  new Error("unable to connect");
    }

}
main();

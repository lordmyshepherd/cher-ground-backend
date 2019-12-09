import 'reflect-metadata';
import 'source-map-support/register'; // source-map을 사용하기 위해 추가함.

import * as express from "express";

import App from './controller/express/App';
import { createConnection } from "typeorm";

const port: number = Number(process.env.PORT) || 3000;
const app: express.Application = new App().app;

createConnection()
    .then(async connection => {
        app
            .listen(port, () => console.log(`Express server listening at ${port}`))
            .on('error', err => console.error(err));
    })
    .catch(error => console.log(error));
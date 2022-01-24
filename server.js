import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './routes/route.js'

import DefaultData from './default.js'
import { Route } from "express";

dotenv.config();


const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

const PORT = process.env.PORT || 5000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const URL = `mongodb+srv://${username}:${password}@cluster0.s09u9.mongodb.net/flipkart?retryWrites=true&w=majority`;
app.use(cors());


Connection(process.env.MONGODB_URI || URL);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT, () =>
    console.log(`Server is running successfully on PORT ${PORT}`));


DefaultData();
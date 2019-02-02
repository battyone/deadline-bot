import FirebaseClient from './database/firebase/FirebaseClient';
import * as dotenv from 'dotenv';
import Server from './Server';
import Bot from './Bot';

dotenv.config();

let data = new FirebaseClient(process.env.DATABASE_NAME, )

let bot = new Bot();
new Server().start();
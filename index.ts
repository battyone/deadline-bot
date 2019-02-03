import FirebaseClient from './database/firebase/FirebaseClient';
import Server from './server/Server';
import * as dotenv from 'dotenv';
import Bot from './bot/Bot';
import Api from './api/Api';


dotenv.config();
const conf = process.env;

const account = {
    projectId: conf.DATABASE_PROJECT_ID,
    clientEmail: conf.DATABASE_CLIENT_EMAIL,
    privateKey: conf.DATABASE_PRIVATE_KEY.replace(/\\n/g, '\n')
}

const data = new FirebaseClient(account);
const api = new Api(conf.SERVICE_TOKEN, 
                    conf.GROUP_TOKEN, 
                    conf.ADDRESS);
const bot = new Bot(data, api);

new Server(bot, conf.CONFIRM_CODE).start();
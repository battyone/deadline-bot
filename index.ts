import * as dotenv from 'dotenv';
import Server from './Server';
import Bot from './Bot';

dotenv.config()

let bot = new Bot();
new Server().start();
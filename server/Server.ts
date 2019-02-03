import * as bodyParser from 'body-parser';
import * as express from 'express';
import Bot from '../bot/Bot';

export default class Server {
    
    private readonly app: express.Application;
    private readonly confirmCode: string;
    private readonly bot: Bot;

    constructor(bot: Bot, confirmCode: string) {
        this.bot = bot;
        this.app = express();
        this.confirmCode = confirmCode;

        this.app.use(bodyParser.json());
        this.app.post('/', this.post);
    }

    start() {
        this.app.listen(3000);
    }

    private post(req: express.Request, res: express.Response) {
        if (req.body.type === 'confirmation') {
            res.send(this.confirmCode);
        } else {
            res.send('ok');
            this.bot.onNewMessage(req.body);
        }
    }
}
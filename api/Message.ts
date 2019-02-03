import Api from './Api';

export default class Message {

    private readonly api: Api;
    private readonly peerId: number;

    constructor(api: Api, peerId: number) {
        this.api = api;
        this.peerId = peerId;
    }

    send(message: string) {
        
    }
}
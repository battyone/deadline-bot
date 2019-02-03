import Message from "./Message";

export default class Api {

    public readonly serviceToken: string;
    public readonly groupToken: string;
    public readonly address: string;

    constructor(serviceToken: string, groupToken: string, address: string) {
        this.serviceToken = serviceToken;
        this.groupToken = groupToken;
        this.address = address;
    }

    message(peerId: number): Message {
        return new Message(this, peerId);
    }
}
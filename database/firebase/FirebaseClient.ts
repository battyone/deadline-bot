import ChatState from '../../models/ChatState';
import IDataProvider from '../IDataProvider';
import * as admin from 'firebase-admin';


class FirebaseClient implements IDataProvider {

    private readonly database;

    constructor(name: string, account: string) {
        admin.initializeApp({
            credential: admin.credential.cert(account),
            databaseURL: `https://${name}.firebaseio.com`
        });

        this.database = admin.database();
    }

    getChatState(peerId: number): ChatState {
        
        throw new Error("Method not implemented.");
    }
    setChatState(peerId: number, state: ChatState): void {
        throw new Error("Method not implemented.");
    }
}
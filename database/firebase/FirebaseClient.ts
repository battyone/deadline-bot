import ChatState from '../../models/ChatState';
import IDataProvider from '../IDataProvider';
import * as admin from 'firebase-admin';


export default class FirebaseClient implements IDataProvider {

    private readonly database;

    constructor(account: admin.ServiceAccount) {
        admin.initializeApp({
            credential: admin.credential.cert(account),
            databaseURL: `https://${account.projectId}.firebaseio.com`
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
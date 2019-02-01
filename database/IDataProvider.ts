import ChatState from '../models/ChatState';

export default interface IDataProvider {
    getChatState(peerId: number): ChatState;
    setChatState(peerId: number, state: ChatState): void;
}
import IDataProvider from '../database/IDataProvider';

export default class Bot {

    private readonly data: IDataProvider;
    private readonly api;

    constructor(data: IDataProvider, api: any) {
        this.data = data;
        this.api = api;
    }

    onNewMessage(request: any) {
        
    }
}
import { MongoClient } from 'mongodb';

export const connectDatabase = async () => {
    const client = await MongoClient.connect(
        'mongodb+srv://wskim:1234@cluster0.c4wznsy.mongodb.net/events?retryWrites=true&w=majority',
    );
    return client;
};

export const connect = async () => {
    let client;
    try {
        client = await connectDatabase();
    } catch (error) {
        console.log('Connecting to the database failed!');
    }
    return client;
};

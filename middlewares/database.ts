import * as mongo from 'mongodb';
import { NextApiRequest } from 'next';

const MONGO_URI =
    'mongodb+srv://wskim:1234@cluster0.c4wznsy.mongodb.net/events?retryWrites=true&w=majority';

interface Database {
    client?: mongo.MongoClient;
}

const connectDB = (async function () {
    console.log(`Start connecting to mongodb... ${MONGO_URI}`);
    const mongoClient: mongo.MongoClient = new mongo.MongoClient(MONGO_URI, {
        connectTimeoutMS: 50000,
    });
    const client = await mongoClient.connect();
    const database: mongo.Db = client.db();
    await createIndexes(database);

    return {
        client,
    };
})();

async function createIndexes(database: mongo.Db) {
    await database.collection('characters').createIndex(
        {
            unique_id: 1,
        },
        {
            unique: true,
            name: 'unique_id_idx',
        },
    );
}

export async function getDatabase(req: DatabaseRequest, res: any, next: any) {
    try {
        req.db = await connectDB;
    } catch (err: unknown) {
        console.log(err);
    } finally {
        // eslint-disable-next-line no-unsafe-finally
        return next();
    }
}

export interface DatabaseRequest extends NextApiRequest {
    db: Database;
}

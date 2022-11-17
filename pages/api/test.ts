import { NextApiResponse } from 'next';
import nc from 'next-connect';
import { getDatabase, DatabaseRequest } from '../../middlewares/database';

const handler = nc();

handler
    .use(getDatabase)
    .get<DatabaseRequest, NextApiResponse>(async (req, res) => {
        console.log('test');

        res.status(200).json({
            hasConnection: req.db.client !== null,
        });
    });

export default handler;

import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use(cors());

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running!')
});

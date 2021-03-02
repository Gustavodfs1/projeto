import * as express from 'express';
import * as bodyParser from 'body-parser';
import albuns from './albuns';
import postagens from './postagens';
import todo from './todo';

const app = express();
app.use(bodyParser.json());
app.use('/albuns', albuns);
app.use('/postagens', postagens);
app.use('/todo', todo);

app.listen(5000);
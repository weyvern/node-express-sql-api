import express from 'express';
import morgan from 'morgan';
import 'dotenv/config.js';
import 'colors';
import users from './routes/users.js';

const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
app.use('/users', users);
app.get('/', (req, res) => res.send('Welcome to the API'));

app.listen(port, () => console.log(`Server running on port ${port}`.yellow));

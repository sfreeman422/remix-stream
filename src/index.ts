import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import { controllers } from './controllers/index.controller';
import { Logger } from './shared/services/logger/logger.service';
import { createPool } from './shared/db/DbPool';
import { correlationIdMiddleWare } from './shared/middleware/correlationId.middleware';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app: Application = express();
const server = createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000;
const logger = new Logger('index');

if (!process.env.PRODUCTION) {
  dotenv.config();
}

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());
app.use(correlationIdMiddleWare);
app.use(controllers);

server.listen(PORT, (e?: Error) => {
  e ? logger.error(e.message) : logger.info('Listening on port 3000');
  createPool();
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat', (msg) => {
    // handle chat message
    console.log(msg);
  });

  socket.on('getPosition', (msg) => {
    // determine positons
    console.log(msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

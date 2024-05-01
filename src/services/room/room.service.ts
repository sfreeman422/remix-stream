import { Logger } from '../../shared/services/logger/logger.service';
import { Server } from 'socket.io';
export class SocketService {
  logger = new Logger('SampleService');
  socket = new Server();

  public getRoom(roomId: string): string {
    this.logger.info(text, { fn: 'greet' });
    return text;
  }
}

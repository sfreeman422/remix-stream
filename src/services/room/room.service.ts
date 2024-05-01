import { Logger } from '../../shared/services/logger/logger.service';
import { Server } from 'socket.io';
export class RoomService {
  logger = new Logger('RoomService');
  socket = new Server();

  public greet(text: string): string {
    this.logger.info(text, { fn: 'greet' });
    return text;
  }
}

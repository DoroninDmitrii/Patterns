import { Logger } from './logger';

export class Server {
  private logger: Logger;

  constructor() {
    this.logger = Logger.getInstance();
  }

  public start() {
    this.logger.log("Starting the server...");

    setTimeout(() => {
      this.logger.log("Server started and running.");
    }, 500);
  }
}

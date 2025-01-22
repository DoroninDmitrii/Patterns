import { Logger } from './logger';

export class Database {
  private logger: Logger;

  constructor() {
    this.logger = Logger.getInstance();
  }

  public connect() {
    this.logger.log("Connecting to the database...");

    setTimeout(() => {
      this.logger.log("Database connection established.");
    }, 1000);
  }
}

export class Logger {
  private static instance: Logger;

  private constructor() {

  }

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }
}

// export const logger1 = Logger.getInstance();
// const logger2 = Logger.getInstance();

// logger1.log("Logger initialized.");
// logger2.log("Another log message."); 

// console.log(logger1 === logger2); // true

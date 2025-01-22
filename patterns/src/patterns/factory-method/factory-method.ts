interface Notification {
  send(message: string): void;
}

class EmailNotification implements Notification {
  send(message: string): void {
    console.log(`Sending Email: ${message}`);
  }
}

class SMSNotification implements Notification {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

class PushNotification implements Notification {
  send(message: string): void {
    console.log(`Sending Push Notification: ${message}`);
  }
}

// Фабричный метод предоставляет интерфейс для создания объекта. Каждый подкласс реализует свою логику создания:

abstract class NotificationFactory {
  abstract createNotification(): Notification;

  // Дополнительная логика для всех типов уведомлений
  notify(message: string): void {
    const notification = this.createNotification();
    notification.send(message);
  }
}

// Для каждого типа уведомления создается отдельная фабрика:

class EmailNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new EmailNotification();
  }
}

class SMSNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new SMSNotification();
  }
}

class PushNotificationFactory extends NotificationFactory {
  createNotification(): Notification {
    return new PushNotification();
  }
}

// Теперь можно использовать фабрику для создания уведомлений:

function clientCode(factory: NotificationFactory) {
  factory.notify("Hello, this is a test notification!");
}

// Используем Email
const emailFactory = new EmailNotificationFactory();
clientCode(emailFactory); // Sending Email: Hello, this is a test notification!

// Используем SMS
const smsFactory = new SMSNotificationFactory();
clientCode(smsFactory); // Sending SMS: Hello, this is a test notification!

// Используем Push
const pushFactory = new PushNotificationFactory();
clientCode(pushFactory); // Sending Push Notification: Hello, this is a test notification!


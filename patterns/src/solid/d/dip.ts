interface PaymentProcessor {
  processPayment(amount: number): void;
}

class PayPalProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount} via PayPal.`);
  }
}

class StripeProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing payment of $${amount} via Stripe.`);
  }
}

export class PaymentService {
  private paymentProcessor: PaymentProcessor;

  constructor(paymentProcessor: PaymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  processOrder(amount: number): void {
    console.log("Starting payment process...");
    this.paymentProcessor.processPayment(amount);
    console.log("Payment process finished.");
  }
}

const paypalProcessor = new PayPalProcessor();
const stripeProcessor = new StripeProcessor();

const paypalService = new PaymentService(paypalProcessor);
paypalService.processOrder(100); 

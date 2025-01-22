interface PaymentProcessor {
  processPayment(amount: number): void;
}

class PayPalProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing $${amount} through PayPal.`);
  }
}

class StripeProcessor implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing $${amount} through Stripe.`);
  }
}

// 

abstract class PaymentProcessorFactory {
  abstract createProcessor(): PaymentProcessor;

  makePayment(amount: number): void {
    const processor = this.createProcessor();
    processor.processPayment(amount);
  }
}

class PayPalProcessorFactory extends PaymentProcessorFactory {
  createProcessor(): PaymentProcessor {
    return new PayPalProcessor();
  }
}

class StripeProcessorFactory extends PaymentProcessorFactory {
  createProcessor(): PaymentProcessor {
    return new StripeProcessor();
  }
}

const paypalFactory = new PayPalProcessorFactory();
paypalFactory.makePayment(100); // Processing $100 through PayPal.

const stripeFactory = new StripeProcessorFactory();
stripeFactory.makePayment(200); // Processing $200 through Stripe.


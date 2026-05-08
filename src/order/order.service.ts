import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OrderService {
  constructor(
    @Inject('PAYMENT_SERVICE')
    private readonly paymentClient: ClientProxy,
  ) {}

  async createOrder() {
    console.log('Order Service: sending payment request');

    const response: unknown = await firstValueFrom(
      this.paymentClient.send('check_payment', {
        orderId: 123,
        amount: 500,
      }),
    );

    console.log('Order Service: received response', response);

    return {
      orderId: 123,
      payment: response,
    };
  }
}

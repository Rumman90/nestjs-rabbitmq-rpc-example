import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PaymentController {
  @MessagePattern('check_payment')
  checkPayment(data: any) {
    console.log('Payment Service: request received', data);

    return {
      success: true,
      message: 'Payment successful',
      transactionId: 'TXN-' + Date.now(),
    };
  }
}

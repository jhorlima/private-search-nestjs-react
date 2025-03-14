import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getServiceStatus() {
    return {
      status: 'ok',
      message: 'Service is running',
    };
  }
}

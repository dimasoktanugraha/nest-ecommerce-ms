import { Injectable } from '@nestjs/common';

@Injectable()
export class StockService {
  getHello(): string {
    return 'Stock Service';
  }
}

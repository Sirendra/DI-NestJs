import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(public powerService: PowerService) {}

  compute(number1: number, number2: number) {
    console.log('Drawing 10 watts of power from power service');
    this.powerService.supplyPower(10);
    return number1 + number2;
  }
}

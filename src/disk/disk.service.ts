import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(public powerService: PowerService) {}

  getData() {
    console.log('Drawing 20 watts of power from PowerService');
    this.powerService.supplyPower(20);
    return 'Aute est eiusmod voluptate ut Lorem. Anim sint anim aliquip commodo nisi velit exercitation sit eiusmod Lorem. Exercitation sunt excepteur cupidatat cupidatat dolore eu Lorem mollit.t';
  }
}

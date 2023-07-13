import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private digits: string;
  private multiplier: number;
  private tolerance: string;

  constructor() {}

  calculateResistor(digits: string): string {
    this.digits = digits;
    return this.digits;
  }
}

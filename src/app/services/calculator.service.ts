import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private band1: string;
  private band2: string;
  private band3: string;
  private multiplier: int;
  private tolerance: string;

  constructor() { }

  calculateResistor(): string {
    let digits = band1 + band2 + band3;
    return digits;
  }
}

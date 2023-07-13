import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private band1: string = "test";
  private band2: string = "test";
  private band3: string = "test";
  private multiplier: number;
  private tolerance: string;

  constructor() { }

  calculateResistor(): string {
    let digits = this.band1 + this.band2 + this.band3;
    return digits;
  }
}

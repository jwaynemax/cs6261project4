import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() {}

  calculateResistor(digits: string, multiplier: string, tolerance: string): string {
    let multiple = 0;
    if (multiplier === "x1") {
      multiple = digits * 1.00;
    } else if (multiplier === "x10") {
      multiple = digits * .01 + "k";
    } else if (multiplier === "x100") {
      multiple = digits * .1 + "k";
    } else if (multiplier === "x1k") {
      multiple = digits * 1 + "k";
    } else if (multiplier === "x10k") {
      multiple = digits * .01 + "M";
    } else if (multiplier === "x100k") {
      multiple = digits * .1 + "M";
    } else if (multiplier === "x1M") {
      multiple = digits * 1 + "M";
    } else if (multiplier === "x10M") {
      multiple = digits * .01 + "G";
    } else if (multiplier === "x100M") {
      multiple = digits * .1 + "G";
    } else if (multiplier === "x1G") {
      multiple = digits * 1 + "G";
    } else if (multiplier === "/10") {
      multiple = digits / 10;
    } else {
      multiple = digits / 100;
    }



    return multiple + " +/- " + tolerance;
  }
}

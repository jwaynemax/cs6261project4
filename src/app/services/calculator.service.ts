import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() {}

  calculateResistor(digits: string, multiplier: string, tolerance: string): string {
    let multiple: any = 0;
    if (multiplier === "x1") {
      multiple = parseInt(digits) * 1.00;
    } else if (multiplier === "x10") {
      multiple = parseInt(digits) * .01;
      multiple = (Math.round(multiple * 100) / 100).toFixed(2);
      multiple += "k";
    } else if (multiplier === "x100") {
      multiple = parseInt(digits) * .1;
      multiple = (Math.round(multiple * 100) / 100).toFixed(2);
      multiple += "k";
    } else if (multiplier === "x1k") {
      multiple = parseInt(digits) * 1;
      multiple = (Math.round(multiple * 100) / 100).toFixed(2);
      multiple += "k";
    } else if (multiplier === "x10k") {
      multiple = parseInt(digits) * .01;
      multiple = (Math.round(multiple * 100) / 100).toFixed(2);
      multiple += "M";
    } else if (multiplier === "x100k") {
      multiple = parseInt(digits) * .1;
      multiple = (Math.round(multiple * 100) / 100).toFixed(2);
      multiple += "M";
    } else if (multiplier === "x1M") {
      multiple = parseInt(digits) * 1;
      multiple = (Math.round(multiple * 100) / 100).toFixed(2);
      multiple += "M";
    } else if (multiplier === "x10M") {
      multiple = parseInt(digits) * .01;
      multiple = (Math.round(multiple * 100) / 100).toFixed(2);
      multiple += "G";
    } else if (multiplier === "x100M") {
      multiple = parseInt(digits) * .1;
      multiple = (Math.round(multiple * 100) / 100).toFixed(2);
      multiple += "G";
    } else if (multiplier === "x1G") {
      multiple = parseInt(digits) * 1;
      multiple = (Math.round(multiple * 100) / 100).toFixed(2);
      multiple += "G";
    } else if (multiplier === "/10") {
      multiple = parseInt(digits) / 10;
      multiple = (Math.round(multiple * 100) / 100).toFixed(2);
    } else {
      multiple = parseInt(digits) / 100;
      multiple = (Math.round(multiple * 100) / 100).toFixed(2);
    }

    return multiple + " +/- " + tolerance;
  }
}

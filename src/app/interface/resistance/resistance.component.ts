import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-resistance',
  templateUrl: './resistance.component.html',
  styleUrls: ['./resistance.component.css']
})
export class ResistanceComponent implements OnInit {

  public band1: string;
  public band2: string;
  public band3: string;
  public multiplier: string;
  public tolerance: string;
  public calculation: string;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  formSubmission(): void {
    let digits = this.band1 + this.band2 + this.band3;
    this.calculation = this.calculatorService.calculateResistor(digits, this.multiplier, this.tolerance);
  }

}

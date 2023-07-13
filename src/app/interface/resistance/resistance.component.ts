import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services/calculator.service';


@Component({
  selector: 'app-resistance',
  templateUrl: './resistance.component.html',
  styleUrls: ['./resistance.component.css']
})
export class ResistanceComponent implements OnInit {

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
  }

  formSubmission() {
    
  }

}

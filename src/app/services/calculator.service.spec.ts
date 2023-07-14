import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';


import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call calculateResistor and return calculation for x1 and 1%', () => {
    expect(service.calculateResistor("872", "x1", "1%")).toEqual("872 +/- 1%");
  });

  it('should call calculateResistor and return calculation for x10 and 2%', () => {
    expect(service.calculateResistor("872", "x10", "2%")).toEqual("8.72k +/- 2%");
  });

  it('should call calculateResistor and return calculation for x100 and 3%', () => {
    expect(service.calculateResistor("872", "x100", "3%")).toEqual("87.20k +/- 3%");
  });

  it('should call calculateResistor and return calculation for x1k and 4%', () => {
    expect(service.calculateResistor("872", "x1k", "4%")).toEqual("872.00k +/- 4%");
  });

  it('should call calculateResistor and return calculation for x10k and 0.5%', () => {
    expect(service.calculateResistor("872", "x10k", "0.5%")).toEqual("8.72M +/- 0.5%");
  });

  it('should call calculateResistor and return calculation for x100k and 0.25%', () => {
    expect(service.calculateResistor("872", "x100k", "0.25%")).toEqual("87.20M +/- 0.25%");
  });

  it('should call calculateResistor and return calculation for x1M and 0.05%', () => {
    expect(service.calculateResistor("872", "x1M", "0.10%")).toEqual("872.00M +/- 0.10%");
  });

  it('should call calculateResistor and return calculation for x10M and 0.05%', () => {
    expect(service.calculateResistor("872", "x10M", "0.05%")).toEqual("8.72G +/- 0.05%");
  });

  it('should call calculateResistor and return calculation for x100M and 5%', () => {
    expect(service.calculateResistor("872", "x100M", "5%")).toEqual("87.20G +/- 5%");
  });

  it('should call calculateResistor and return calculation for x1G and 10%', () => {
    expect(service.calculateResistor("872", "x1G", "10%")).toEqual("872.00G +/- 10%");
  });

  it('should call calculateResistor and return calculation for /10 and 10%', () => {
    expect(service.calculateResistor("872", "/10", "10%")).toEqual("87.20 +/- 10%");
  });

  it('should call calculateResistor and return calculation for /100 and 10%', () => {
    expect(service.calculateResistor("872", "/100", "10%")).toEqual("8.72 +/- 10%");
  });
});

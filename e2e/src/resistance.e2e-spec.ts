import { browser, by, element } from 'protractor';

describe('Resistance Calculator', () => {
  it('should have header title that is Welcome to Resistance Calculator!', () => {
    expect(element(by.id('header')).getText()).toEqual('Welcome to Resistance Calculator!');
  });

  it('should have a p tag that says select bands', () => {
    expect(element(by.id('select-bands')).getText()).toEqual('Select bands');
  });

  it('should have a p tag that says select bands', () => {
    expect(element(by.id('select-bands')).getText()).toEqual('Select bands');
  });

  it('should have a column header for digits', () => {
    expect(element(by.id('digits-header')).getText()).toEqual('Digits:');
  });

  it('should have a column header for multiplier', () => {
    expect(element(by.id('multiplier-header')).getText()).toEqual('Multiplier:');
  });

  it('should have a column header for tolerance', () => {
    expect(element(by.id('tolerance-header')).getText()).toEqual('Tolerance:');
  });

  it('should calculate resistance with brown, black, black, x1, 1%', () => {
    element(by.id('submit')).click();
    expect(element(by.id('calculation')).getText()).toEqual('Resistance: 100 +/- 1%');
  });

  it('should calculate resistance with red, brown, red, x100, 3%', () => {
    const band1 = element(by.id('band1'));
    const band2 = element(by.id('band2'));
    const band3 = element(by.id('band3'));
    const multiplier = element(by.id('multiplier'));
    const tolerance = element(by.id('tolerance'));

    band1.click();
    band2.click();
    band3.click();
    multiplier.click();
    tolerance.click();

    const band1Option = element(by.cssContainingText('#band1 option', 'Red'));
    const band2Option = element(by.cssContainingText('#band2 option', 'Brown'));
    const band3Option = element(by.cssContainingText('#band3 option', 'Red'));
    const multiplierOption = element(by.cssContainingText('#multiplier option', 'x100 Red'));
    const toleranceOption = element(by.cssContainingText('#tolerance option', '3% Orange'));
    band1Option.click();
    band2Option.click();
    band3Option.click();
    multiplierOption.click();
    toleranceOption.click();

    element(by.id('submit')).click();
    expect(element(by.id('calculation')).getText()).toEqual('Resistance: 21.20k +/- 3%');
  });

  it('should calculate resistance with green, violet, black, x100M, 0.10%', () => {
    const band1 = element(by.id('band1'));
    const band2 = element(by.id('band2'));
    const band3 = element(by.id('band3'));
    const multiplier = element(by.id('multiplier'));
    const tolerance = element(by.id('tolerance'));

    band1.click();
    band2.click();
    band3.click();
    multiplier.click();
    tolerance.click();

    const band1Option = element(by.cssContainingText('#band1 option', 'Green'));
    const band2Option = element(by.cssContainingText('#band2 option', 'Violet'));
    const band3Option = element(by.cssContainingText('#band3 option', 'Black'));
    const multiplierOption = element(by.cssContainingText('#multiplier option', 'x100M Gray'));
    const toleranceOption = element(by.cssContainingText('#tolerance option', '0.10% Violet'));
    band1Option.click();
    band2Option.click();
    band3Option.click();
    multiplierOption.click();
    toleranceOption.click();

    element(by.id('submit')).click();
    expect(element(by.id('calculation')).getText()).toEqual('Resistance: 57.00G +/- 0.10%');
  });

  it('should calculate resistance with yellow, brown, white, ÷10, 10%', () => {
    const band1 = element(by.id('band1'));
    const band2 = element(by.id('band2'));
    const band3 = element(by.id('band3'));
    const multiplier = element(by.id('multiplier'));
    const tolerance = element(by.id('tolerance'));

    band1.click();
    band2.click();
    band3.click();
    multiplier.click();
    tolerance.click();

    const band1Option = element(by.cssContainingText('#band1 option', 'Yellow'));
    const band2Option = element(by.cssContainingText('#band2 option', 'Brown'));
    const band3Option = element(by.cssContainingText('#band3 option', 'White'));
    const multiplierOption = element(by.cssContainingText('#multiplier option', '÷10 Gold'));
    const toleranceOption = element(by.cssContainingText('#tolerance option', '10% Silver'));
    band1Option.click();
    band2Option.click();
    band3Option.click();
    multiplierOption.click();
    toleranceOption.click();

    element(by.id('submit')).click();
    expect(element(by.id('calculation')).getText()).toEqual('Resistance: 41.90 +/- 10%');
  });

  it('should calculate resistance with white, white, white, ÷100, 10%', () => {
    const band1 = element(by.id('band1'));
    const band2 = element(by.id('band2'));
    const band3 = element(by.id('band3'));
    const multiplier = element(by.id('multiplier'));
    const tolerance = element(by.id('tolerance'));

    band1.click();
    band2.click();
    band3.click();
    multiplier.click();
    tolerance.click();

    const band1Option = element(by.cssContainingText('#band1 option', 'White'));
    const band2Option = element(by.cssContainingText('#band2 option', 'White'));
    const band3Option = element(by.cssContainingText('#band3 option', 'White'));
    const multiplierOption = element(by.cssContainingText('#multiplier option', '÷100 Silver'));
    const toleranceOption = element(by.cssContainingText('#tolerance option', '10% Silver'));
    band1Option.click();
    band2Option.click();
    band3Option.click();
    multiplierOption.click();
    toleranceOption.click();

    element(by.id('submit')).click();
    expect(element(by.id('calculation')).getText()).toEqual('Resistance: 9.99 +/- 10%');
  });

});

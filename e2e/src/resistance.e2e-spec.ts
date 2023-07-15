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
});

import { browser, by, element } from 'protractor';

describe('Resistance Calculator', () => {
  it('should have header title that is Welcome to Resistance Calculator!', () => {
    expect(element(by.id('header')).getText()).toEqual('Welcome to Resistance Calculator!');
  });
});

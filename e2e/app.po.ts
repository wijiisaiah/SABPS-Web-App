import { browser, element, by } from 'protractor';

export class SABPS1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('sabps-root h1')).getText();
  }
}

import { SABPS1Page } from './app.po';

describe('sabps1 App', function() {
  let page: SABPS1Page;

  beforeEach(() => {
    page = new SABPS1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('sabps works!');
  });
});

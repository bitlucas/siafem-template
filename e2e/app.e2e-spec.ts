import { SiafemPage } from './app.po';

describe('siafem App', () => {
  let page: SiafemPage;

  beforeEach(() => {
    page = new SiafemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

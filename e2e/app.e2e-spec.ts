import { EtaxPage } from './app.po';

describe('etax App', function() {
  let page: EtaxPage;

  beforeEach(() => {
    page = new EtaxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

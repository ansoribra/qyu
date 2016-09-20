import { QyuPage } from './app.po';

describe('qyu App', function() {
  let page: QyuPage;

  beforeEach(() => {
    page = new QyuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

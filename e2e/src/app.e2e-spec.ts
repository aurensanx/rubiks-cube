import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('there should be a play button', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('PLAY');
  });
});

import { LoopbackGettingStartedFrontendPage } from './app.po';

describe('loopback-getting-started-frontend App', () => {
  let page: LoopbackGettingStartedFrontendPage;

  beforeEach(() => {
    page = new LoopbackGettingStartedFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { CliDefaultPage } from './app.po';

describe('cli-default App', () => {
  let page: CliDefaultPage;

  beforeEach(() => {
    page = new CliDefaultPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { DormOnlinePage } from './app.po';

describe('dorm-online App', () => {
  let page: DormOnlinePage;

  beforeEach(() => {
    page = new DormOnlinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

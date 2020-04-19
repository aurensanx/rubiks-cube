import {Fl2SolutionPage} from './fl2-solution.po';

describe('new App', () => {
    let page: Fl2SolutionPage;

    beforeEach(() => {
        page = new Fl2SolutionPage();
    });

    it('There should be a cube', () => {
        page.navigateTo();
        expect(page.getCubeComponent()).toBeTruthy();
    });
});

import {browser, by, element} from 'protractor';

export class Fl2SolutionPage {


    navigateTo() {
        return browser.get('/solution/1');
    }

    getCubeComponent() {
        return element(by.deepCss('app-cube'));
    }


}

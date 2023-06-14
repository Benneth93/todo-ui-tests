import {ChainablePromiseElement} from 'webdriverio'

import Page from './page.js'

class TodosPage extends Page{
    
    public open () {
        return super.open('todos');
    }

    public EnterNewTitle(){
        return browser.$("#todoTitleTxt").setValue("webdriver.io title");
    }

    public EnterNewDescription(){
        return browser.$("#todoDescriptionTxt").setValue("webdriver.io description");
    }

    public ClickSaveButton(){
        return browser.$("#todoSaveBtn").click();
    }
}

export default new TodosPage();
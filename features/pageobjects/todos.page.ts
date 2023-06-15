import {ChainablePromiseElement} from 'webdriverio'

import Page from './page.js'

class TodosPage extends Page{
    
    public open () {
        return super.open('todos');
    }

    public EnterNewTitle(titleIn: string){
        return browser.$("#todoTitleTxt").setValue(`webdriver.io: ${titleIn}`);
    }

    public EnterNewDescription(descriptionIn: string){
        return browser.$("#todoDescriptionTxt").setValue(`webdriver.io: ${descriptionIn}`);
    }

    public ClickSaveButton(){
        return browser.$("#todoSaveBtn").click();
    }
}

export default new TodosPage();
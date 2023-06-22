import {ChainablePromiseElement} from 'webdriverio'

import Page from './page.js'

class TodosPage extends Page{
    
    public open () {
        return super.open('todos');
    }

    public EnterNewTitle(titleIn: string){
        return browser.$("#todoTitleTxt").setValue(titleIn);
    }

    public EnterNewDescription(descriptionIn: string){
        return browser.$("#todoDescriptionTxt").setValue(descriptionIn);
    }

    public ClickSaveButton(){
        browser.$("#todoSaveBtn").waitForClickable();
        return browser.$("#todoSaveBtn").click();
    }

    public async GetTodoCard(taskID: number){
        var elements = await browser.$$(".todo-card");
        
        var card = await elements.find(async (e) => {
            var id = await e.getAttribute("id");
            return id === taskID.toString();
        });
    }
}

export default new TodosPage();
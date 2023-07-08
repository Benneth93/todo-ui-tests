import {ChainablePromiseElement} from 'webdriverio'

import Page from './page.js'

class TodosPage extends Page{
    
    public async open () {
        return super.open('todos');
    }

    public async EnterNewTitle(titleIn: string){
        return browser.$("#todoTitleTxt").setValue(titleIn);
    }

    public async EnterNewDescription(descriptionIn: string){
        return browser.$("#todoDescriptionTxt").setValue(descriptionIn);
    }

    public async ClickSaveButton(){
        browser.$("#todoSaveBtn").waitForClickable();
        return browser.$("#todoSaveBtn").click();
    }

    public async GetTodoCard(taskID: number){
        var elements = await browser.$$(".todo-card");
        
        var card = elements.find(async (e) => {
            var id = await e.getAttribute("id");
            return id === taskID.toString();
        });
    }

    public async ClickEditButton(taskID: number){
        
        var elements = await browser.$$(".todo-card");
        var card = elements.find(async (e)=>{
            if(taskID.toString() === await e.getAttribute("id")){
                return await e.$(".card-edit-button").click();
            };
        });
    }
}

export default new TodosPage();
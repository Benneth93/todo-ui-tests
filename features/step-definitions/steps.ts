import { Given, When, Then } from '@wdio/cucumber-framework';

import TodosPage from '../pageobjects/todos.page.js'
import TodoDatabaseService from '../../services/todo.database.service.js'
import StringTools from '../../services/stringtools.service.js'
import todoDatabaseService from '../../services/todo.database.service.js';


const pages = {
    todos: TodosPage
}

const services = {
    tododb: TodoDatabaseService,
    stringTools: StringTools
}

const testVariables = {
    taskId: 0,
    title: '',
    description: ''
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open();
});

When(/^I click the new todo button$/, async () => {(    
    await browser.$("#createNewTodoBtn")).click();
});

Then(/^The new todo dialog should open$/, async () => {(
    await expect(browser.$("#todoTitleTxt")).toBeExisting());
    await expect(browser.$("#todoDescriptionTxt")).toBeExisting();
});

When(/^I enter details for a new todo$/, async ()=>{

    testVariables.title = `webdriver.io:  ${services.stringTools.generateRandomString(10)}`;
    testVariables.description = `webdriver.io: ${services.stringTools.generateRandomString(10)}`;

    await pages.todos.EnterNewTitle(testVariables.title);
    await pages.todos.EnterNewDescription(testVariables.description);
});

When(/^I Click the save button$/, async ()=>{
    await pages.todos.ClickSaveButton();
});

Then(/^I check the todo exists in the database$/, async ()=>{
     var taskID = await TodoDatabaseService.getTodoIDByDetails(testVariables.title, testVariables.description);
        
    expect(taskID).toBeDefined();    
    expect(taskID).toBeGreaterThan(0);
        
    testVariables.taskId = Number(taskID);
    console.log(`Task saved to variables: ${testVariables.taskId}`);

});

Then(/^The todo card exists on the webpage$/, async ()=>{ 
    var card = await pages.todos.GetTodoCard(testVariables.taskId);
    expect(card).toBeDisplayed;
});

When(/^I click the edit button$/, async ()=>{
    await pages.todos.ClickEditButton(testVariables.taskId);
});

When(/^The edit dialog should open$/, async ()=>{
    console.log("hello");
});




function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}


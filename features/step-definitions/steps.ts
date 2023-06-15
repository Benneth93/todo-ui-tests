import { Given, When, Then } from '@wdio/cucumber-framework';

import TodosPage from '../pageobjects/todos.page.js'
import TodoDatabaseService from '../../services/todo.database.service.js'

const pages = {
    todos: TodosPage
}

const services = {
    tododb: TodoDatabaseService
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
    await pages.todos.EnterNewTitle();
    await pages.todos.EnterNewDescription();
});

Then(/^Click the save button$/, async ()=>{
    await pages.todos.ClickSaveButton();
});

Then(/^I check the todo exists in the database$/, async ()=>{
    await services.tododb.getTodoIDByDetails("webdriver.io", "webdriver.io");
});

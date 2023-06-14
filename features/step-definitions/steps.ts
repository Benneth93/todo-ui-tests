import { Given, When, Then } from '@wdio/cucumber-framework';

import TodosPage from '../pageobjects/todos.page.js'

const pages = {
    todos: TodosPage
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


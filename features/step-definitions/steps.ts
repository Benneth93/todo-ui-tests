import { Given, When, Then } from '@wdio/cucumber-framework';

import TodoPage from '../pageobjects/todo.page.js';

const pages = {
    todo: TodoPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I click the new todo button$/, async () => {
    console.warn("new todo button step not implemented")
});

Then(/^The new todo dialog should open$/, async () => {
    console.warn("new dialoge check step not implemented")
});


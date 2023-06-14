import {ChainablePromiseElement} from 'webdriverio'

import Page from './page.js'

class TodosPage extends Page{
    
    public open () {
        return super.open('todos');
    }
}

export default new TodosPage();
import {ChainablePromiseElement} from 'webdriverio'

import Page from './page.js'

class TodoPage extends Page{
    
    public open () {
        return super.open('todo');
    }
}

export default new TodoPage();
import Header from "../components/header.js";
import Creator from "../utilities/creator.js";


const testParams = {
    tagName: 'div',
    classList: ['first', 'second'], 
    text: 'text',
    attr: {
        id: 'testId',
        'data-test': 'testData'
    } 
}

export default class View {
    APP_CONTAINER = document.body
    constructor() {
        this.header = new Header()
        this.display()
    }

    display(){
        this.APP_CONTAINER.append(this.header.getElement())
    }
}

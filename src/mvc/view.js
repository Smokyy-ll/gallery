import Creator from "../utilities/creator";


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
        // Header должен создавать не creator здесь, а класс header в другом файле
        this.header = new Creator(testParams)
        this.display()
    }

    display(){
        this.APP_CONTAINER.append(this.header.getElement())
    }
}
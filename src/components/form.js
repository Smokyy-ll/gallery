import Creator from "../utilities/creator";

const formParams = {
    tagName: 'form',
    classList: ['first', 'second'], 
}

const inputParams = {
    tagName: 'input',
    classList: ['first', 'second'], 
    attr: {
        'name': 'query',
    }
}

const buttonParams = {
    tagName: 'button',
    text: 'Отправить',
    classList: ['first', 'second'], 
}

class Form extends Creator {
    constructor(){
        super(formParams)
        this.input = new Creator(inputParams)
        this.button = new Creator(buttonParams)
        this.addChildren()
    }
    addChildren(){
        this.element.append(this.input.getElement())
        this.element.append(this.button.getElement())
    }
}

export default Form
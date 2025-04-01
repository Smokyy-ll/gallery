import Creator from "../utilities/creator.js"
import Form from "./form.js"

const headerParams = {
    tagName: 'header',
    classList: ['first', 'second'], 
}

class Header extends Creator {
    constructor(){
        super(headerParams)
        this.form = new Form()
        this.addChildren()
    }

    addChildren(){
        this.element.append(this.form.getElement())
    }
}

export default Header 
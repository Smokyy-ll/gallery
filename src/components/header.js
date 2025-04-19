import Creator from "../utilities/creator.js";
import Form from "./form.js";
import style from "./header.module.css";
import ListButtons from "./list-buttons.js";

const headerParams = {
    tagName: 'header',
    classList: [style.header], 
}

class Header extends Creator {
    constructor(){
        super(headerParams)
        this.form = new Form()
        this.listBtn = new ListButtons()
        this.addChildren()
    }

    addChildren(){
        this.element.append(this.form.getElement())
        this.element.append(this.listBtn.getElement())
    }
}

export default Header 
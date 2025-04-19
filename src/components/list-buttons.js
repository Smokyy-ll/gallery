import Creator from "../utilities/creator"

const listButtonsParams = {
    tagName: "ul",
}

const listItemParams = {
    tagName: "li",
}

const buttonParams = {
    tagName: "button",
}

class ListButtons extends Creator {
    constructor(){
        super(listButtonsParams)
        this.addChildren()
    }
    addChildren(){
        const listItem = new Creator(listItemParams)
        console.log(listItem.getElement());
        
        const button = new Creator(buttonParams)
        console.log(button.element);
        
        listItem.element.append(button.getElement())
        this.element.append(listItem)
    }

}

export default ListButtons
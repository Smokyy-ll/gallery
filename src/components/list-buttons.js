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
        // 1. Нужно перебрать список параметров кнопок
        // 2. Для каждой кнопки создать li
        // 3. Выполнить вставку li>button в список
        const listItem = new Creator(listItemParams)
        
        const button = new Creator(buttonParams)
        
        listItem.element.append(button.getElement())

        // тут исправил
        this.element.append(listItem.getElement())
    }

}

export default ListButtons
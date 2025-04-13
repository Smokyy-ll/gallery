import Creator from "../utilities/creator.js";

const listParams = {
    tagName: 'ul',
    classList: ['first', 'second'], 
}

const listElementParams = {
    tagName: 'li',
    classList: ['first', 'second'], 
}

const imgElementParams = {
    tagName: 'img',
    classList: ['first', 'second'], 
    attr: {
        src: ''
    }
}

class List extends Creator {
    constructor(){
        super(listParams)
        // this.data = this.setCurrentData()
    }
    createImages(data){
        if (data) {
            const listWrapper = document.createDocumentFragment();

            data.forEach(el => {
                const listElement = new Creator(listElementParams)
                console.log(el);
                
                if (el.urls.regular) {
                    imgElementParams.attr.src = el.urls.regular
                }

                const imgElement = new Creator(imgElementParams)
                listElement.getElement().append(imgElement.getElement())
                listWrapper.append(listElement.getElement())
            })
            this.element.append(listWrapper)

        }
    }
}

export default List
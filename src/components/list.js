import Creator from "../utilities/creator.js";

const listParams = {
    tagName: 'ul',
    classList: ['first', 'second'], 
}

const listElementParams = {
    tagName: 'li',
    classList: [
        "w-385",
        "h-275",
    ], 
}

const imgElementParams = {
    tagName: 'img',
    classList: [
        "w-385",
        "h-275",
    ], 
    attr: {
        src: ''
    }
}

const signElementParams = {
    tagName: 'h2',
    classList: [
        "text-black",
        "text-2xl"
    ], 
    attr: {
    },
    text: ''
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

                if (el.alt_description) {
                    signElementParams.text = el.alt_description
                }

                const imgElement = new Creator(imgElementParams)
                listElement.getElement().append(imgElement.getElement())
                listWrapper.append(listElement.getElement())
                
                const signElement = new Creator(signElementParams)
                listElement.getElement().append(signElement.getElement())
                listWrapper.append(listElement.getElement())
            })

            this.clearList()

            this.element.append(listWrapper)

        }
    }

    clearList(){
        if (this.element) {
            this.element.innerHTML = "";
        }
    }
}

export default List
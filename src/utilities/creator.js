export default class Creator{
    constructor(objParams){
        this.params = objParams;
        this.element = this.createElement();
        if (this.element) {
            this.setStyle()
            this.setInnerText()
            this.setAttr()
            this.setValue()
        }

    }

    setValue(){
        if (this.params.value) {
            this.element.value = this.params.value; 
        }
    }


    setAttr(){
        if (this.params.attr) {
            for (const key in this.params.attr) {
                this.element.setAttribute(key, this.params.attr[key]);
            }
        }
    }

    setInnerText(){
        if (this.params.text) {
            this.element.innerText = this.params.text
        }
    };

    setStyle(){
        if (this.params.classList && this.params.classList.length > 0) {
            this.element.classList.add(...this.params.classList)
        }
    };

    createElement(){
        if (this.params.tagName) {
            return document.createElement(this.params.tagName)
        } 
        else {
            return null
        }
    };

    getElement(){
        return this.element
    }
}



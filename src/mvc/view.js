import Header from "../components/header.js";
import List from "../components/list.js";

export default class View {
    APP_CONTAINER = document.body
    constructor() {
        this.header = new Header()
        this.list = new List()
        this.display()
    }

    display(){
        this.APP_CONTAINER.append(
            this.header.getElement(),
            this.list.getElement()
        )
    }
}

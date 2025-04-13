import Model from "./model.js";
import View from "./view.js";

export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.setListener();
    }
    setListener(){
        this.view.header.form.element.addEventListener('submit', async (event) => {
            event.preventDefault()
            const query = new FormData(event.target).get('query');
            const result = await this.model.getData(query);
            console.log(result);
            
            await this.view.list.createImages(result);
        })
    }
}

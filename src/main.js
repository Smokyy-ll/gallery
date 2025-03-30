import Controller from "./mvc/controller.js";
import Model from "./mvc/model.js";
import View from "./mvc/view.js";


class Init {
    constructor() {
        this.model = new Model();
        this.view = new View();
        this.app = new Controller(this.model, this.view);
    }

}

new Init()
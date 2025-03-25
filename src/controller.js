import Model from "./model.js";
import View from "./view.js";

export default class Controller {
    constructor() {
        this.model = new Model();
        this.view = new View();
    }
}


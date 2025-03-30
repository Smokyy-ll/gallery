import Model from "./model.js";
import View from "./view.js";

export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
}

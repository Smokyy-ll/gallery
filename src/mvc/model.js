export default class Model {
    constructor() {
        this.API_KEY = '6gvsYAUrnXjWHmDf_OVlw8YaL1q6QxK2YN9eTR7rXWw';
        this.BASE_URL = 'https://api.unsplash.com/search/photos/';
    }
    async getData(query) {
        const url = `${this.BASE_URL}?client_id=${this.API_KEY}&query=${query}&per_page=20&orientation=portrait`;
        const response = await fetch(url,{ method: 'GET'});
        const data = await response.json();
        return data.results
    }
}
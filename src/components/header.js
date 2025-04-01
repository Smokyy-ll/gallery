import Creator from "../utilities/creator.js"

const headerParams = {
    tagName: 'header',
    classList: ['first', 'second'], 
    text: 'header',
    attr: {
        id: 'headerId',
        'data': 'header'
    } 
}

class Header extends Creator {
    constructor(){
        super(headerParams)
    }
}

export default Header 
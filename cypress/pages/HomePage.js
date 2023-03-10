import action from "../utils/Action";

class AmazonHomePage {

    searchInput = "[id='twotabsearchtextbox']";
    searchButton = "[id='nav-search-submit-button']";

    open(){
        action.navigateTo('https://www.amazon.in/')
    }

    inputQueryInSearchBox(query){
        action.sendKeys(this.searchInput, query);
        action.clickElement(this.searchButton);
    }

}

export default new AmazonHomePage();
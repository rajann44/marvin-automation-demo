import action from "../utils/Action";

class SearchResultPage {

    searchResult  = "[class='a-link-normal s-no-outline']";

    clickProductFromSearchList(id){
        action.clickElementFromList(this.searchResult,id);
    }

}

export default new SearchResultPage();
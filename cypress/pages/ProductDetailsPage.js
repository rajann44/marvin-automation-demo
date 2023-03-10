import action from "../utils/Action";

class ProductDetailsPage {

    sizeDropdownButton  = "[name='dropdown_selected_size_name']";
    addToCartBtn = "[id='add-to-cart-button']";
    goToCartBtn = "[data-cel-widget='sw-gtc']";
    productPrice = "[id='corePrice_feature_div']";
    productDetail = "[id='rebates_feature_div']";
    productDetailOverlay = "js-feature-refresh-overlay";
    productSize(size){return "[data-a-html-content=\""+size+ "\"]";} 

    selectProductSize(size){
        action.selectDropdown(this.sizeDropdownButton, size);
    }

    addTheProductToCartAndGoToCart(){
        action.clickElement(this.addToCartBtn);
        action.clickElement(this.goToCartBtn);
    }

}

export default new ProductDetailsPage();
import action from "../utils/Action";

class ShoppingCartPage {

    proceedToBuyBtn  = "[data-feature-id='proceed-to-checkout-action']";
    productPrice  = "[id='sc-subtotal-amount-activecart']";
    productQuantity = "[data-a-class='quantity']";

    clickProceedToBuyButton(){
        action.clickElement(this.proceedToBuyBtn);
    }

}

export default new ShoppingCartPage();
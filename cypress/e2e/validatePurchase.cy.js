import AmazonHomePage from "../pages/HomePage"
import ProductDetailsPage from "../pages/ProductDetailsPage";
import SearchResultPage from "../pages/SearchResultPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import Action from "../utils/Action";
import Assert from "../utils/Assert";
import amazonTestData from "../testData/amazon";

describe('validate purchase', () => {

  it('make purchase on amazon', () => {
    AmazonHomePage.open()
    AmazonHomePage.inputQueryInSearchBox(amazonTestData.productToSearch);
    SearchResultPage.clickProductFromSearchList('0');
    ProductDetailsPage.selectProductSize(amazonTestData.productSize);
    Action.waitUntilPageLoads(ProductDetailsPage.productDetail, "class", ProductDetailsPage.productDetailOverlay);
    ProductDetailsPage.addTheProductToCartAndGoToCart();
    Assert.isVisible(ShoppingCartPage.productPrice);
    Assert.isTextPresentInLocator(ShoppingCartPage.productQuantity,'1');
    ShoppingCartPage.clickProceedToBuyButton();
    Action.takeScreenshot();
  })
  
})
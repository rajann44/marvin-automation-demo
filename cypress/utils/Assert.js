class Assert {

    isVisible(locator){
        cy.get(locator).should('be.visible')
    }

    isTextPresentInLocator(locator, value){
        cy.contains(locator, value)
    }

}

export default new Assert();
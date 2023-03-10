class Action {

    navigateTo(url){
        cy.visit(url)
    }

    sendKeys(locator, value){
        cy.get(locator).clear()
        cy.get(locator).type(value);
    }

    clickElement(locator){
        cy.get(locator).click()
    }

    clickElementFromList(locatorList, id){
        cy.get(locatorList).invoke('removeAttr', 'target').eq(id).click()
    }

    selectDropdown(locator, value){
        cy.get(locator).select(value)
    }

    waitUntilPageLoads(locator, attibute, expectedValue){
        cy.get(locator).invoke('attr', attibute).should("contain", expectedValue)
        cy.get(locator).invoke('attr', attibute).should("not.contain", expectedValue)
    }

    takeScreenshot(){
        cy.screenshot()
    }

}

export default new Action();
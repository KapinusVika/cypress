import basketPage from "../Pages/BasketPage"

class popularItemPage{

    inBasketButton = '.item-buy'
    basketButton = '.headerCart'
    itemName = 'h1[itemprop="name"]'
    descriptionMenu = '.tabs__content'


    isOpened (){
        cy.get(this.descriptionMenu).should('be.visible')
    }

    addItemToBasket (){
        cy.get(this.inBasketButton).click()
        cy.get(this.basketButton).click()
        return new basketPage
    }

    checkItemName (expectedName){
        cy.get(this.itemName).first().then(($fav) => {
            const actualItemName = $fav.text()
            expect(actualItemName).to.eq(expectedName)
        })
    }

    getItemName(){
        let nnn = cy.get(this.itemName).then($title => $title.text())
        return nnn
    }
 
} export default popularItemPage
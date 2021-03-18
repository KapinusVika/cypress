import basketPage from "./BasketPage"

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

    getItemName (){
        return cy.get(itemName).first().then(($fav) => {
            const itemName = $fav.text()
        })
    }

} export default popularItemPage
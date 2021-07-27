
class basketPage{
    contentHeader = '.content__header'
    itemName = '.cr-basket__name > a'
    orderButton = '#j-basket__ok > span'
    confirmOrder = '#j-basket__confirm'
    deliveryInfoForm = '.b-order'

    isOpened (){
        cy.get(this.contentHeader).should('be.visible')
    }

    openBasketFromItemPage () {
        cy.get(this.orderButton).click
    }

    checkItemName (expectedName){
        cy.get(this.itemName).then(($fav) => {
            const productName = $fav.text()
            expect(productName).to.eq(expectedName)
        })
    }

    showSuccessOrderConfirmation () {
        cy.get(this.orderButton).click()
        cy.get(this.deliveryInfoForm).should('be.visible')
        cy.get(this.confirmOrder).should('be.visible')
    }
} export default basketPage
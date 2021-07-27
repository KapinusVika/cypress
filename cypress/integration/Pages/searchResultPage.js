class searchResultPage {

    resultHeader = 'div.b-content > h1'
    itemName = 'span.result__name'

    
    isOpened (){
        cy.get(this.resultHeader).should('be.visible')
        
    }

    checkItemTitle(word){
        cy.get(this.itemName).each(($fav) => {
            const itemTitle = $fav.text()
            expect(itemTitle).to.contain(word)
        })
    }

    checkProductName(name){
        cy.get(this.resultHeader).then(($fav) => {
            const productName = $fav.text()
            expect(productName).to.eq(name)
        })
    }
}
export default searchResultPage

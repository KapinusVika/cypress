class searchResultPage {

    resultHeader = 'div.b-content > h1'
    itemName = 'span.result__name'

    
    isOpened (){
        cy.get(this.resultHeader).should('be.visible')
        
    }

    getItemTitle(word){
        cy.get(this.itemName).first().then(($fav) => {
            const itemTitle = $fav.text()
            expect(itemTitle).to.contain(word)
        })
    }
}
export default searchResultPage

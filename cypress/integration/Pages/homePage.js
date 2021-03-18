import popularItemPage from "../Pages/popularItemPage"
import searchResultPage from "../Pages/searchResultPage"
import popularPrimeryComponent from "../Components/popularPrimeryComponent"

class homePage {

    searchButton = 'button[name="sa"]'
    accountButton = 'div[role = "button"] > div > button'
    loginButton = 'button[title="Вход"]'
    emailInput = 'input[class = "sc-htpNat hIeGZi"]'
    passInput = 'input[name="password"]'
    login = 'div[style="text-align: center;"] > div'
    logo ='div.logotype'
    userEmail = '.userToolsSubtitle'
    searchFrame = '[id^=j-search]'
    searchButton = 'button[name="sa"]'
    navigateMenuHeader = '.navigationItem'
    popularPrimeryComponent ='.b-foreign_goods > li'


     isOpened (){
        cy.get(this.logo).should('be.visible')
        
    }

    getComponents(){
        return popularPrimeryComponent
    }

    authorization (email, pass){
        cy.get(this.accountButton).click()
        cy.get(this.loginButton).click()
        cy.get(this.emailInput).type(email)
        cy.get(this.passInput).type(pass)
        cy.get(this.login).click()
        return new homePage
    }

    getUserEmail(expected) {
        cy.get(this.accountButton).click()
        cy.get(this.userEmail).first().then(($fav) => {
            const favEmail = $fav.text()
            expect(favEmail).to.eq(expected)
        })
    }

    searchItem(word){
        cy.get(this.searchFrame).type(word)
        cy.get(this.searchButton).click()
    }

    openMenuItem(sectionName, productName){
        cy.contains(sectionName).click()
        cy.contains(productName).click()
        return new searchResultPage
    }

    openPopularItemPage(itemName) {

    

        // cy.get(this.popularItem).first().then(($fav) => {
        //     const favItemName = $fav.text()
        //     expect(favItemName).to.eq(itemName)
        // }).click()

        // cy.get(this.popularItem).first().filter(el => el.toString).contains(itemName).click()
        // return new popularItemPage

        cy.get(this.popularPrimeryComponent).contains(itemName).click()
    }

} export default homePage

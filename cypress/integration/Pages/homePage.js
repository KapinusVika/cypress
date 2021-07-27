
import searchResultPage from "../Pages/searchResultPage"
import popularItemPage from "./popularItemPage"

class homePage {

    searchButton = 'button[name="sa"]'
    accountButton = 'div[role = "button"] > div > button'
    loginButton = 'button[title="Вход"]'
    emailInput = 'input[class = "sc-htpNat hIeGZi"]'
    passInput = 'input[name="password"]'
    login = 'div[style="text-align: center;"] > div'
    logo ='.logotypeImg'
    userEmail = '.userToolsSubtitle'
    searchFrame = '[id^=j-search]'
    searchButton = 'button[name="sa"]'
    navigateMenuHeader = '.navigationItem'
    popularItems = "span[class = 'foreign_goods__name']>a"


    isOpened (){
        return cy.get(this.logo).should('be.visible').its("length")
        
    }

    authorization (email, pass){
        cy.get(this.accountButton).click()
        cy.get(this.loginButton).click()
        cy.get(this.emailInput).type(email)
        cy.get(this.passInput).type(pass)
        cy.get(this.login).click()
        return new homePage
    }

    checkUserEmail(expected) {
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
        // cy.get(this.popularItems).then($el => $el.get(index)).click()
        cy.get(`span[class = 'foreign_goods__name']>a[title = "${itemName}" ]`).click()
        return new popularItemPage
    } 

    // getItemByIndex(index){
    //     let namem = cy.get(this.popularItems).then($el => $el[index]).invoke('attr', 'title')
    //     return namem

    // }

    // getCountItems(){
    //     return cy.get(this.popularItems).length
    // }

} export default homePage

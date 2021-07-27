/// <reference types='cypress' />

import HomePage from '../Pages/homePage'
import SearchResultPage from '../Pages/searchResultPage'

let word = 'Утюг'

describe('SearchTest', () => {
    const homePage = new HomePage;
    const resultPage = new SearchResultPage;
    it('Correct search', () => {
        cy.visit("https://www.21vek.by/")
        homePage.isOpened()
        homePage.searchItem(word)
        resultPage.isOpened()
        resultPage.checkItemTitle(word)
    })
})
/// <reference types='cypress' />

import HomePage from '../Pages/homePage'
import SearchResultPage from '../Pages/searchResultPage'

let sectionName = 'Для кухни'
let categoryName = 'Мелкая техника'
let productName = 'Тостеры'


describe('NavigationTest', () => {
    const homePage = new HomePage;
    const resultPage = new SearchResultPage
    it('Correct navigation', () => {
        cy.visit("https://www.21vek.by/")
        homePage.isOpened()
        homePage.openMenuItem(sectionName, productName)
        resultPage.isOpened()
        
    })
})
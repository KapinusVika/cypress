/// <reference types='cypress' />

import HomePage from '../Pages/homePage'
import PopularItemPage from '../Pages/popularItemPage'


let expectedName = 'Блендер погружной Vitek VT-8522W'

describe('openPopularItemTest', () => {
    const homePage = new HomePage;
    const popularItem = new PopularItemPage;
    it('Correct opening', () => {
        cy.visit("https://www.21vek.by/")
        homePage.isOpened()
        homePage.openPopularItemPage(expectedName)
        popularItem.isOpened()
    })
})
/// <reference types='cypress' />

import HomePage from '../Pages/homePage'
import PopularItemPage from '../Pages/popularItemPage'

let expectedName = 'Фитнес-трекер Xiaomi Mi Smart Band 5 / BHR4219RU'

describe('openPopularItemTest', () => {
    const homePage = new HomePage;
    const popularItem = new PopularItemPage;
    it('Correct opening', () => {
        cy.visit("https://www.21vek.by/")
        homePage.isOpened()
        homePage.openPopularItemPage(expectedName)
        popularItem.isOpened()
        popularItem.checkItemName(expectedName)
    
    })
    // it('Correct opening', () => {

    //     let index = Math.floor(Math.random() * 29)
    //     cy.visit("https://www.21vek.by/")
    //     homePage.isOpened()
        // let itemName = homePage.getItemByIndex(index, title => {
        //     homePage.openPopularItemPage(itemName)
        //     homePage.openPopularItemPage("Швабра-моп Deerma Spray Mop / TB500")

        // })
    

    //     let itemName = homePage.getItemByIndex(index)
    //     homePage.openPopularItemPage(index)
    //     popularItem.isOpened()
    //     let expName = popularItem.getItemName()



        // homePage.openPopularItemPage(7)
        // popularItem.checkItemName(itemName)
        // expect(itemName).to.eq('Подгузники-трусики детские Pampers Pants 4 (176шт)')



})
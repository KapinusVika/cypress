/// <reference types='cypress' />

import HomePage from '../Pages/homePage'
import PopularItemPage from '../Pages/popularItemPage'
import BasketPage from '../Pages/basketPage'

let itemName = 'Маска для волос Kaypro Special Care Botu-Cure для сильно поврежденных волос (1000мл)'

describe('AddItemToBasketTest', () => {
    const homePage = new HomePage;
    const itemPage = new PopularItemPage;
    const basketPage = new BasketPage;
    it('Correct Adding Item', () => {
        cy.visit("https://www.21vek.by/")
        homePage.isOpened()
        homePage.openPopularItemPage(itemName)
        itemPage.isOpened()
        itemPage.addItemToBasket()
        basketPage.isOpened()
        basketPage.checkItemName(itemName)
        basketPage.showSuccessOrderConfirmation()
    
    })
})
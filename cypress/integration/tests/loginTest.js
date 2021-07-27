/// <reference types='cypress' />

import HomePage from '../Pages/homePage'

describe('LoginTest', () => {
    const homePage = new HomePage;
    it('Correct Authorization', () => {
        cy.visit("https://www.21vek.by/")
        homePage.isOpened()
        cy.fixture('userLoginDetails').then((user) => {
            homePage.authorization(user.email, user.pass)
            cy.wait(5000)
            homePage.checkUserEmail(user.email)
        })
    })
})


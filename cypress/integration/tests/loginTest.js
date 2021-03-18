/// <reference types='cypress' />

import HomePage from '../Pages/homePage'

let email = 'parvikus@gmail.com'
let pass = 'Vikadima1307'

describe('LoginTest', () => {
    const homePage = new HomePage;
    it('Correct Authorization', () => {
        cy.visit("https://www.21vek.by/")
        homePage.isOpened()
        homePage.authorization(email, pass)
        cy.wait(5000)
        homePage.getUserEmail(email)
    })
})


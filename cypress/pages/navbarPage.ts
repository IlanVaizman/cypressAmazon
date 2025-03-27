export class navbarPage {

    elements = {
        all: () => cy.get('#nav-hamburger-menu'),  
        todaysDeals: () => cy.get('[data-csa-c-content-id="nav_cs_gb"]'),
        registry: () => cy.get('[data-csa-c-content-id="nav_cs_registry"]'),
        customerService: () => cy.get('[data-csa-c-content-id="nav_cs_customerservice"]'),
        giftCards: () => cy.get('[data-csa-c-content-id="nav_cs_gc"]'),
        sell: () => cy.get('[data-csa-c-content-id="nav_cs_sell"]')
   }

    validateNavBar() {
        this.elements.all().should('be.visible').and('not.be.disabled')
        this.elements.todaysDeals().should('be.visible').and('not.be.disabled')
        this.elements.registry().should('be.visible').and('not.be.disabled')
        this.elements.customerService().should('be.visible').and('not.be.disabled')
        this.elements.giftCards().should('be.visible').and('not.be.disabled')
        this.elements.sell().should('be.visible').and('not.be.disabled')
    }

    clickOnCustomerService() {
        this.elements.customerService().click()
    }


}
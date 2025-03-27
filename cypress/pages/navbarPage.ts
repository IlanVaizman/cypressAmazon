export class navbarPage {

    elements = {
        signInBtn: () => cy.get('#nav-link-accountList'),
        searchBar: () => cy.get('#twotabsearchtextbox'),

        allBtn: () => cy.get('#nav-hamburger-menu'),  
        todaysDealsBtn: () => cy.get('[data-csa-c-content-id="nav_cs_gb"]'),
        registryBtn: () => cy.get('[data-csa-c-content-id="nav_cs_registry"]'),
        customerServiceBtn: () => cy.get('[data-csa-c-content-id="nav_cs_customerservice"]'),
        giftCardsBtn: () => cy.get('[data-csa-c-content-id="nav_cs_gc"]'),
        sellBtn: () => cy.get('[data-csa-c-content-id="nav_cs_sell"]')
   }

    clickOnSignIn(): void {
       this.elements.signInBtn().click()
    }

    searchForItem(item: string): void {
         this.elements.searchBar().type(item)
         this.elements.searchBar().type('{enter}')
    }

   validateSecondaryNavBar(): void {
        this.elements.allBtn().should('be.visible').and('not.be.disabled')
        this.elements.todaysDealsBtn().should('be.visible').and('not.be.disabled')
        this.elements.registryBtn().should('be.visible').and('not.be.disabled')
        this.elements.customerServiceBtn().should('be.visible').and('not.be.disabled')
        this.elements.giftCardsBtn().should('be.visible').and('not.be.disabled')
        this.elements.sellBtn().should('be.visible').and('not.be.disabled')
    }


    clickOnCustomerService(): void {
        this.elements.customerServiceBtn().click()
    }


}
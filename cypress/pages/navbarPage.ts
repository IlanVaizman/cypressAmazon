export class navbarPage {

    elements = {
        all: () => cy.contains('span.hm-icon-label', 'All'),  
        todaysDeals: () => cy.contains('a', "Today's Deals"),
        registry: () => cy.contains('a', 'Registry'),
        customerService: () => cy.contains('a', 'Customer Service'),
        giftCards: () => cy.contains('a', 'Gift Cards'),
        sell: () => cy.contains('a', 'Sell')
   }

    clickOnCustomerService() {
        this.elements.customerService().click()
    }


}
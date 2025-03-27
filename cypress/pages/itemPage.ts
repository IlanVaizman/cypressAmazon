export class itemPage {
  
  elements = {
    itemDescription: () => cy.get('#productTitle'),
    addToCartButton: () => cy.get('#add-to-cart-button'),
    cartSuccessMsg : () => cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS'),
    itemColors: (altText: string) => cy.get(`img[alt='${altText}']`).closest('span.a-button').eq(0),
    chosenItemColor: () => cy.get('#inline-twister-dim-title-color_name'),
  };

  getItemDescription(): Cypress.Chainable<string> {
    return this.elements.itemDescription().invoke('text').then((text) => text.trim().replace('"', '&quot;'));    
  }

  clickOnAddToCartButton(): void {
    this.elements.addToCartButton().click();
  }

  validateCartSuccessMsg(): void {
    this.elements.cartSuccessMsg().should('be.visible').contains('Added to cart');
  }

  addtoCart(): void {
    this.clickOnAddToCartButton()
    this.validateCartSuccessMsg()
  }


  selectItemColor(color : string): void {
    this.elements.itemColors(color).click();
    cy.wait(1000);
  }

  validateItemColor(color: string): void {
    this.elements.chosenItemColor().contains(color);
  }
}
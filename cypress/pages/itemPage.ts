export class itemPage {
  
  elements = {
    addToCartButton: () => cy.get('#add-to-cart-button'),
    cartSuccessMsg : () => cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS'),
  };

  clickOnAddToCartButton(): void {
    this.elements.addToCartButton().click();
  }

  validateCartSuccessMsg(): void {
    this.elements.cartSuccessMsg().should('be.visible').contains('Added to cart');
  }

}
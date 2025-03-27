export class cartNavbar {
  
  elements = {
    itemsInCart: () => cy.get('.ewc-item'),
    itemInCartByAlt: (altText: string) => cy.get(`img[alt="${altText}"]`),
  };

  validateItemsInCart(numOfItems: number): void {
    this.elements.itemsInCart().should('have.length', numOfItems);
  }

  validateItemInCart(itemDescription: string): void {
    this.elements.itemInCartByAlt(itemDescription).should('be.visible');
  }


}
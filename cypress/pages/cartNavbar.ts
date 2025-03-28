export class cartNavbar {
  
  elements = {
    freeShippingMsg: () => cy.get('.ewc-compact-actions'),
    itemsInCart: () => cy.get('.ewc-item'),
    itemInCartByAlt: (altText: string) => cy.get(`img[alt="${altText}"]`),
    deleteItemButton: () => cy.get(`[data-a-selector='decrement-icon']`), 
  };

  validateItemsInCart(numOfItems: number): void {
    this.elements.itemsInCart().should('have.length', numOfItems);
  }

  validateItemInCart(itemDescription: string): void {
    this.elements.itemInCartByAlt(itemDescription).should('be.visible');
  }

  deleteallItemsInCart(): void {
   while (this.elements.deleteItemButton().should('exist')) {
      this.elements.deleteItemButton().click()
    }
  }

  validateFreeShipping(flag: boolean): void {
    if (flag) {
      this.elements.freeShippingMsg().contains('Part of your order qualifies for FREE Shipping.')
      .should('be.visible')
    }
    else {
      this.elements.freeShippingMsg().contains(/Add \$\d+\.\d+ of eligible items to your order for FREE Shipping\./)
      .should('be.visible');
    }
  }

}
export class cartNavbar {
  
  elements = {
    freeShippingMsg: () => cy.get('.ewc-compact-actions .a-alert-container'),
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

  deleteAllItemsInCart(): void {
    this.elements.deleteItemButton().should('exist').then(($btns) => {
      cy.log('Number of delete buttons:', $btns.length);
      cy.wrap($btns.first()).click();
      cy.wait(1000);

      if ($btns.length > 1) {
      this.deleteAllItemsInCart();
      }
    })
  }
  

  validateFreeShipping(flag: boolean): void {
    const msg = this.elements.freeShippingMsg();
    if (flag) {
          msg.invoke('text').then((text) => {
          expect(text).to.include('Part of your order qualifies for FREE Shipping.');
         })
    } else {
        msg.invoke('text').then((text) => {
          const normalizedText = text.replace(/\s+/g, ' ').trim();
          expect(normalizedText).to.match(/Add \$\d+\.\d+ of eligible items to your order for FREE Shipping\./);
      });
    }
  }  
}
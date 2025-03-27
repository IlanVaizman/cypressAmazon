export class itemsPage {
  
  elements = {
    productDescription: (productName: string) => cy.get(`div[role='listitem']`).contains(productName),
  };


  clickOnProduct(productDescription: string): void {
    this.elements.productDescription(productDescription).click();
  }
}
export class customerService {

    elements = {
        searchBar: () => cy.get('#hubHelpSearchInput'),  
   }

    search(text: string) {
        this.elements.searchBar().type(text)
        this.elements.searchBar().click().type('{enter}');
    }


}
export class customerService {

    elements = {
        searchBar: () => cy.get('#hubHelpSearchInput'),  
        sameTopicLink: () => cy.get('.same_window'),
   }

    search(text: string) {
        this.elements.searchBar().type(text)
        this.elements.searchBar().type('{enter}');
    }

    clickOnTopicLink(text: string) {
        this.elements.sameTopicLink().contains(text).click()
    }


}
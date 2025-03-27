export class loginPage {

  elements = {
      emailInput: () => cy.get('#ap_email'),
      continueBtn: () => cy.get('#continue'),
      passwordInput: () => cy.get('#ap_password'),
      signInBtn: () => cy.get('#signInSubmit'),

 }

  login(email: string, password: string): void {
      this.elements.emailInput().type(email)
      this.elements.continueBtn().click()
      this.elements.passwordInput().type(password)
      this.elements.signInBtn().click()
  }


}
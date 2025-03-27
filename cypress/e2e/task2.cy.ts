import { navbarPage } from "../pages/navbarPage";
import { customerService } from "../pages/customerServicePage";

const navbar = new navbarPage();
const customerServicePage = new customerService();


describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.com/')
    navbar.validateNavBar()
    navbar.clickOnCustomerService()
    customerServicePage.search('where is my stuff')
  })
})
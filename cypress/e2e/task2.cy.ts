import { navbarPage } from "../pages/navbarPage";
import { customerService } from "../pages/customerServicePage";

const navbar = new navbarPage();
const customerServicePage = new customerService();


describe('navbar search', () => {
  it(`customer service (Where's My Stuff?)`, () => {
    cy.visit('https://www.amazon.com/')
    navbar.validateSecondaryNavBar()
    navbar.clickOnCustomerService()
    customerServicePage.search('where is my stuff')
    customerServicePage.clickOnTopicLink(`Where's My Stuff?`)
  })
})
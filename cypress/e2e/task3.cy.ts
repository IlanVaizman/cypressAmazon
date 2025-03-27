import { navbarPage } from "../pages/navbarPage";
import { loginPage } from "../pages/loginPage";
import { itemsPage } from "../pages/itemsPage";
import { itemPage } from "../pages/itemPage";
import { cartNavbar } from "../pages/cartNavbar";

const navbar = new navbarPage();
const login = new loginPage();
const items = new itemsPage();
const item = new itemPage();
const cartNav = new cartNavbar();

const firstItemDescription: string = 'Bostitch Office Personal Electric Pencil Sharpener, Powerful Stall-Free Motor, High Capacity Shavings Tray, Gray (EPS4-KTGRAY)'

describe('navbar search', () => {
  it(`customer service (Where's My Stuff?)`, () => {

    cy.visit('https://www.amazon.com/')
    navbar.clickOnSignIn()
    login.login('puresoul22703@gmail.com', 's6w?bV%:WMyRA4m')
    navbar.searchForItem(firstItemDescription)
    items.clickOnProduct(firstItemDescription.slice(firstItemDescription.indexOf(' ') + 1)) // Removes the first word
    item.clickOnAddToCartButton()
    item.validateCartSuccessMsg()
    cartNav.validateItemInCart(firstItemDescription)

  })
})
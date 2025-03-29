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
const firstItemTitle: string = firstItemDescription.slice(firstItemDescription.indexOf(' ') + 1)
const additemsAmount: number = 3

beforeEach(() => {
  cy.login();
  cy.visit('')

    navbar.searchForItem(firstItemDescription)
    items.clickOnProduct(firstItemTitle)
    item.addtoCart()
    cartNav.validateItemsInCart(1)
    cartNav.validateItemInCart(firstItemDescription)

    cy.visit('Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z')
    item.selectItemColor('Red, Black, Blue')
    item.validateItemColor('Red, Black, Blue')
    item.getItemDescription().then((description) => {
      cy.log('Item Description:', description);
      item.addtoCart()
      cartNav.validateItemsInCart(2)
      cartNav.validateItemInCart(description)
    })
})

afterEach(() => {
  cartNav.deleteAllItemsInCart()
})

describe('cart navbar', () => {
  it(`qualify for free shipping`, () => {
    cartNav.validateFreeShipping(false)
    navbar.searchForItem(firstItemDescription)
    items.clickOnProduct(firstItemTitle)
    for (let i = 0; i < additemsAmount; i++) {
      item.addtoCart()
      cy.go('back')
    }
    cartNav.validateFreeShipping(true)
  })
})
import { navbarPage } from "../pages/navbarPage";
import { loginPage } from "../pages/loginPage";
import { itemsPage } from "../pages/itemsPage";
import { itemPage } from "../pages/itemPage";
import { cartNavbar } from "../pages/cartNavbar";

const navbar = new navbarPage();
const items = new itemsPage();
const item = new itemPage();
const cartNav = new cartNavbar();

const firstItemFullDescription: string = 'Bostitch Office Personal Electric Pencil Sharpener, Powerful Stall-Free Motor, High Capacity Shavings Tray, Gray (EPS4-KTGRAY)'
const firstItemDescription: string = firstItemFullDescription.slice(firstItemFullDescription.indexOf(' ') + 1) // Remove the first word from the description
const secoundItemLink: string = 'Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z'
const color: string = 'Red, Black, Blue'
const additemsAmount: number = 3

beforeEach(() => {
  cy.login();
  cy.visit('')

    navbar.searchForItem(firstItemFullDescription)
    items.clickOnProduct(firstItemDescription)
    item.addtoCart()
    cartNav.validateItemsInCart(1)
    cartNav.validateItemInCart(firstItemFullDescription)

    cy.visit(secoundItemLink)
    item.selectItemColor(color)
    item.validateItemColor(color)
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
    navbar.searchForItem(firstItemFullDescription)
    items.clickOnProduct(firstItemDescription)
    for (let i = 0; i < additemsAmount; i++) {
      item.addtoCart()
      cy.go('back')
    }
    cartNav.validateFreeShipping(true)
  })
})
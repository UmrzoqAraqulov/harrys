import {
  burger_icon,
  cheeseCornDog_img,
  cheeseHotDog_img,
  chickenBurger_img,
  chickenNugget_img,
  classicCornDog_img,
  classicHotDog_img,
  drinks_icon,
  fries_img,
  hotDog_icon,
  iceTea_img,
  meatBurner_img,
  meatHotDog_img,
  moxito_img,
  sideDishes_icon
} from "@/constants/index";
import {IData, INavLink, TPath} from "@/types";

export const pathNames: TPath = {
  '/welcome': "WELCOME",
  "/drinks": "DRINKS",
  "/burgers": "BURGERS",
  "/hot-dogs": "HOT-DOGS",
  "/side-dishes": "SIDE-DISHES",
}

export const navLinks: INavLink[] = [
  {
    image: sideDishes_icon,
    title: "SIDE-DISHES",
    href: '/side-dishes'
  }, {
    image: drinks_icon,
    title: "DRINKS",
    href: "/drinks"
  }, {
    image: hotDog_icon,
    title: "HOT-DOGS",
    href: "/hot-dogs"
  }, {
    image: burger_icon,
    title: "BURGERS",
    href: "/burgers"
  },
]

export const hotDogData: IData[] = [
  {
    price: 15000,
    type: "Стандарт",
    title: "HOT-DOG С ИКРОЙ",
    image: cheeseHotDog_img,
  }, {
    price: 15000,
    type: "Стандарт",
    title: "HOT-DOG КЛАССИК ",
    image: classicHotDog_img,
  }, {
    price: 18000,
    type: "Стандарт",
    title: "HOT-DOG МЯСНОЙ",
    image: meatHotDog_img,
  }, {
    price: 20000,
    type: "Дабл",
    title: "HOT-DOG С ИКРОЙ",
    image: cheeseHotDog_img,
  }, {
    price: 20000,
    type: "Дабл",
    title: "HOT-DOG КЛАССИК ",
    image: classicHotDog_img,
  }, {
    price: 25000,
    type: "Дабл",
    title: "HOT-DOG МЯСНОЙ",
    image: meatHotDog_img,
  }
];

export const burgersData: IData[] = [
  {
    price: 23000,
    type: "Стандарт",
    image: chickenBurger_img,
    title: "ЧИКЕН BURGER",
  }, {
    price: 25000,
    type: "Стандарт",
    image: meatBurner_img,
    title: "МЯСНОЙ BURGER",
  }, {
    price: 29000,
    type: "Дабл",
    image: chickenBurger_img,
    title: "ЧИКЕН BURGER",
  }, {
    price: 30000,
    type: "Дабл",
    image: meatBurner_img,
    title: "МЯСНОЙ BURGER",
  }
]

export const sideDishesData: IData[] = [
  {
    price: 15000,
    type: "Classic",
    title: "CORN-DOG",
    image: classicCornDog_img,
  }, {
    price: 17000,
    type: "Cheese",
    title: "CORN-DOG",
    image: cheeseCornDog_img,
  }, {
    price: 17000,
    type: "Стандарт",
    title: "Куриные наггетсы",
    image: chickenNugget_img,
  }, {
    price: 15000,
    type: "Стандарт",
    title: "Картофель фри",
    image: fries_img,
  }
]

export const drinksData: IData[] = [
  {
    price: 15000,
    title: "Мохито",
    image: moxito_img,
  }, {
    price: 15000,
    title: "Айс-ти",
    image: iceTea_img,
  }
]

export const drinksList: Omit<IData, "image">[] = [
  {
    price: 15000,
    title: "Эспрессо",
  }, {
    price: 15000,
    title: "Американо",
  }, {
    price: 17000,
    title: "Капучино",
  }, {
    price: 17000,
    title: "Латте",
  }, {
    price: 17000,
    title: "Флэт вайт",
  }, {
    price: 22000,
    title: "Раф кофе",
  },
  // --------------------
  {
    price: 17000,
    title: "Эспрессо XL",
  }, {
    price: 22000,
    title: "Американо XL",
  }, {
    price: 25000,
    title: "Капучино XL",
  }, {
    price: 25000,
    title: "Латте XL",
  }, {
    price: 25000,
    title: "Флэт вайт XL",
  }, {
    price: 27000,
    title: "Раф кофе XL",
  }
]










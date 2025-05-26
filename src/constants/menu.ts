import {
  cheeseCornDog_img,
  cheeseHotDog_img,
  chickenBurger_img,
  chickenNugget_img,
  classicCornDog_img,
  classicHotDog_img,
  fries_img,
  iceTea_img,
  meatBurner_img,
  meatHotDog_img,
  moxito_img,
  double_chicken_burger,
  double_meat_burger,
} from "@/constants/index";
import { IData } from "@/types";

export const menuData: IData[] = [
  {
    price: 20000,
    type: "Стандарт",
    title: "HOT-DOG С ИКРОЙ",
    image: cheeseHotDog_img,
  },
]

export const hotDogData: IData[] = [
  {
    price: 20000,
    type: "Стандарт",
    title: "HOT-DOG С ИКРОЙ",
    image: cheeseHotDog_img,
  }, {
    price: 20000,
    type: "Стандарт",
    title: "HOT-DOG КЛАССИК ",
    image: classicHotDog_img,
  }, {
    price: 25000,
    type: "Стандарт",
    title: "HOT-DOG МЯСНОЙ",
    image: meatHotDog_img,
  }, {
    price: 27000,
    type: "Дабл",
    title: "HOT-DOG С ИКРОЙ",
    image: cheeseHotDog_img,
  }, {
    price: 27000,
    type: "Дабл",
    title: "HOT-DOG КЛАССИК ",
    image: classicHotDog_img,
  }, {
    price: 35000,
    type: "Дабл",
    title: "HOT-DOG МЯСНОЙ",
    image: meatHotDog_img,
  }
];

export const burgersData: IData[] = [
  {
    price: 27000,
    secondPrice: 32000,
    type: "Стандарт",
    secondTitle: "Стандарт Cheese",
    image: chickenBurger_img,
    title: "ЧИКЕН BURGER",
  }, {
    price: 32000,
    secondPrice: 37000,
    type: "Стандарт",
    secondTitle: "Стандарт Cheese",
    image: meatBurner_img,
    title: "МЯСНОЙ BURGER",
  }, {
    price: 37000,
    secondPrice: 40000,
    type: "Дабл",
    secondTitle: "Дабл Cheese",
    image: double_chicken_burger,
    title: "ЧИКЕН BURGER",
  }, {
    price: 40000,
    secondPrice: 45000,
    type: "Дабл",
    secondTitle: "Дабл Cheese",
    image: double_meat_burger,
    title: "МЯСНОЙ BURGER",
  }
]

export const sideDishesData: IData[] = [
  {
    price: 28000,
    type: "Classic",
    title: "CORN-DOG",
    image: classicCornDog_img,
  }, {
    price: 31000,
    type: "Cheese",
    title: "CORN-DOG",
    image: cheeseCornDog_img,
  }, {
    price: 28000,
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
    price: 20000,
    title: "Мохито",
    image: moxito_img,
  }, {
    price: 20000,
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
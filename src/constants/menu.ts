import chicken_burger from '@/assets/images/tovuq-burger.png';
import chicken_bbq_burger from '@/assets/images/tovuq-burger-BBQ.png';
import chicken_chizburger from '@/assets/images/tovuq-chizburger.png';
import fresh_burger from '@/assets/images/fresh-burger.png';
import chicken_halapenyo_burger from '@/assets/images/tovuq-burger-halapeno.png';

import meat_burger from '@/assets/images/goshtli-burger.png';
import bbq_burger from '@/assets/images/BBQ-burger.png';
import chizburger from '@/assets/images/chizburger.png';
import dabl_chizburger from '@/assets/images/dabl-chizburger.png';
import halapenyo_burger from '@/assets/images/halapenyo-burger.png';

import meat_harryster from '@/assets/images/goshtli-harryster.png';
import harryster_bbq from '@/assets/images/harryster-BBQ.png';
import harryster_halapenyo from '@/assets/images/harryster-halapenyo.png';
import chiz_harryster from '@/assets/images/chiz-harryster.png';
import chicken_harryster from '@/assets/images/tovuqli-harryster.png';
import chicken_harryster_bbq from '@/assets/images/tovuqli-harryster-BBQ.png';
import chicken_harryster_halapenyo from '@/assets/images/tovuqli-harryster-halapenyo.png';
import chicken_chiz_harryster from '@/assets/images/tovuqli-chizharryster.png';

import bbq_hot_dog from '@/assets/images/BBQ-hot-dog.png';
import cheese_bbq_hot_dog from '@/assets/images/pishloqli-BBQ-hot-dog.png';
import classic_hot_dog from '@/assets/images/klassik-hot-dog.png';
import cheese_crispy_hot_dog from '@/assets/images/pishloqli-crispy-hot-dog.png';
import cheese_classic_hot_dog from '@/assets/images/pishloqli-klassik-hot-dog.png';
import longer from '@/assets/images/longer.png';
import cheese_longer from '@/assets/images/pishloqli-longer.png';
import crispy_hot_dog from '@/assets/images/crispy-hot-dog.png';

import chicken_klab_sendvich from '@/assets/images/klab-sendvich-tovuq.png';
import turkey_klab_sendvich from '@/assets/images/klab-sendvich-indeyka.png';

import potato_fri_cheese from '@/assets/images/kartoshka-fri-pishloq.png';
import sweet_potato from '@/assets/images/jaydari-kartoshka.png';
import naggets from '@/assets/images/naggets.png';
import potato_fri from '@/assets/images/kartoshka-fri.png';
import potato_fri_cheese_halapenyo from '@/assets/images/kartoshka-fri-pishloq-halpeno.png';

import ketchup_sous from '@/assets/pictures/pomidor-ketchup.jpg';
import bbq_sous from '@/assets/pictures/BBQ-sous.jpg';
import cheese_sous from '@/assets/pictures/pishloqli-sous.jpg';
import garlic_sous from '@/assets/pictures/sarimsoq-sous.jpg';

import bon_aqua_half from '@/assets/pictures/bon-aqua-gazsiz-half.jpg';
import sprite_half from '@/assets/pictures/sprite-half.jpg';
import fuse_tea_half from '@/assets/pictures/fuse-tea-mango-romashka.jpg';
import coca_cola_half from '@/assets/pictures/coca-cola-half.jpg';
import fanta_half from '@/assets/pictures/fanta-half.jpg';

import special_combo from '@/assets/images/special-combo.png';
import king_snack_combo from '@/assets/images/king-snack-combo.png';
import lunch_deal_combo from '@/assets/images/lunch-deal-combo.png';
import classic_combo from '@/assets/images/classic-combo.png';

import { IData } from "@/types";

export const menuCategories = ["combo", "meatBurger", "chickenBurger", "meatHarryster", "chickenHarryster", "sendvich", "fri", "hotDog", "sous", "drink"];

export const menuData: IData[] = [
  {
    title: "special_combo",
    text: "special_combo-text",
    price: 25000,
    type: "combo",
    image: special_combo,
  },
  {
    title: "king_snack_combo",
    text: "king_snack_combo-text",
    price: 50000,
    type: "combo",
    image: king_snack_combo,
  },
  {
    title: "lunch_deal_combo",
    text: "lunch_deal_combo-text",
    price: 52000,
    type: "combo",
    image: lunch_deal_combo,
  },
  {
    title: "classic_combo",
    text: "classic_combo-text",
    price: 60000,
    type: "combo",
    image: classic_combo,
  },
  {
    title: "chicken_burger",
    text: "chicken_burger-text",
    price: 32000,
    type: "chickenBurger",
    image: chicken_burger,
  },
  {
    title: "chicken_bbq",
    text: "chicken_bbq-text",
    price: 32000,
    type: "chickenBurger",
    image: chicken_bbq_burger,
  },
  {
    title: "chicken_chizburger",
    text: "chicken_chizburger-text",
    price: 35000,
    type: "chickenBurger",
    image: chicken_chizburger,
  },
  {
    title: "fresh_burger",
    text: "fresh_burger-text",
    price: 35000,
    type: "chickenBurger",
    image: fresh_burger,
  },
  {
    title: "chicken_halapenyo_burger",
    text: "chicken_halapenyo_burger-text",
    price: 32000,
    type: "chickenBurger",
    image: chicken_halapenyo_burger,
  },

  {
    title: "meat_burger",
    text: "meat_burger-text",
    price: 40000,
    type: "meatBurger",
    image: meat_burger,
  },
  {
    title: "bbq_burger",
    text: "bbq_burger-text",
    price: 40000,
    type: "meatBurger",
    image: bbq_burger,
  },
  {
    title: "chizburger",
    text: "chizburger-text",
    price: 42000,
    type: "meatBurger",
    image: chizburger,
  },
  {
    title: "dabl_chizburger",
    text: "dabl_chizburger-text",
    price: 55000,
    type: "meatBurger",
    image: dabl_chizburger,
  },
  {
    title: "halapenyo_burger",
    text: "halapenyo_burger-text",
    price: 40000,
    type: "meatBurger",
    image: halapenyo_burger,
  },

  {
    title: "meat_harryster",
    text: "meat_harryster-text",
    price: 30000,
    type: "meatHarryster",
    image: meat_harryster,
  },
  {
    title: "harryster_bbq",
    text: "harryster_bbq-text",
    price: 30000,
    type: "meatHarryster",
    image: harryster_bbq,
  },
  {
    title: "harryster_halapenyo",
    text: "harryster_halapenyo-text",
    price: 30000,
    type: "meatHarryster",
    image: harryster_halapenyo,
  },
  {
    title: "chiz_harryster",
    text: "chiz_harryster-text",
    price: 32000,
    type: "meatHarryster",
    image: chiz_harryster,
  },

  {
    title: "chicken_harryster",
    text: "chicken_harryster-text",
    price: 27000,
    type: "chickenHarryster",
    image: chicken_harryster,
  },
  {
    title: "chicken_harryster_bbq",
    text: "chicken_harryster_bbq-text",
    price: 27000,
    type: "chickenHarryster",
    image: chicken_harryster_bbq,
  },
  {
    title: "chicken_harryster_halapenyo",
    text: "chicken_harryster_halapenyo-text",
    price: 27000,
    type: "chickenHarryster",
    image: chicken_harryster_halapenyo,
  },
  {
    title: "chicken_chiz_harryster",
    text: "chicken_chiz_harryster-text",
    price: 29000,
    type: "chickenHarryster",
    image: chicken_chiz_harryster,
  },

  {
    title: "chicken_klab_sendvich",
    text: "chicken_klab_sendvich-text",
    price: 38000,
    type: "sendvich",
    image: chicken_klab_sendvich,
  },
  {
    title: "turkey_klab_sendvich",
    text: "turkey_klab_sendvich-text",
    price: 38000,
    type: "sendvich",
    image: turkey_klab_sendvich,
  },

  {
    title: "potato_fri_cheese",
    text: "potato_fri_cheese-text",
    price: 20000,
    type: "fri",
    image: potato_fri_cheese,
  },
  {
    title: "sweet_potato",
    text: "sweet_potato-text",
    price: 16000,
    type: "fri",
    image: sweet_potato,
  },
  {
    title: "naggets",
    text: "naggets-text",
    price: 15000,
    type: "fri",
    image: naggets,
  },
  {
    title: "potato_fri",
    text: "potato_fri-text",
    price: 16000,
    type: "fri",
    image: potato_fri,
  },
  {
    title: "potato_fri_cheese_halapenyo",
    text: "potato_fri_cheese_halapenyo-text",
    price: 22000,
    type: "fri",
    image: potato_fri_cheese_halapenyo,
  },

  {
    title: "bbq_hot_dog",
    text: "bbq_hot_dog-text",
    price: 23000,
    type: "hotDog",
    image: bbq_hot_dog,
  },
  {
    title: "cheese_bbq_hot_dog",
    text: "cheese_bbq_hot_dog-text",
    price: 25000,
    type: "hotDog",
    image: cheese_bbq_hot_dog,
  },
  {
    title: "classic_hot_dog",
    text: "classic_hot_dog-text",
    price: 23000,
    type: "hotDog",
    image: classic_hot_dog,
  },
  {
    title: "cheese_crispy_hot_dog",
    text: "cheese_crispy_hot_dog-text",
    price: 25000,
    type: "hotDog",
    image: cheese_crispy_hot_dog,
  },
  {
    title: "cheese_classic_hot_dog",
    text: "cheese_classic_hot_dog-text",
    price: 25000,
    type: "hotDog",
    image: cheese_classic_hot_dog,
  },
  {
    title: "longer",
    text: "longer-text",
    price: 23000,
    type: "hotDog",
    image: longer,
  },
  {
    title: "cheese_longer",
    text: "cheese_longer-text",
    price: 25000,
    type: "hotDog",
    image: cheese_longer,
  },
  {
    title: "crispy_hot_dog",
    text: "crispy_hot_dog-text",
    price: 23000,
    type: "hotDog",
    image: crispy_hot_dog,
  },

  {
    title: "ketchup_sous",
    text: "ketchup_sous-text",
    price: 5000,
    type: "sous",
    image: ketchup_sous,
  },
  {
    title: "bbq_sous",
    text: "bbq_sous-text",
    price: 5000,
    type: "sous",
    image: bbq_sous,
  },
  {
    title: "cheese_sous",
    text: "cheese_sous-text",
    price: 5000,
    type: "sous",
    image: cheese_sous,
  },
  {
    title: "garlic_sous",
    text: "garlic_sous-text",
    price: 5000,
    type: "sous",
    image: garlic_sous,
  },
]

export const drinkData: IData[] = [
  {
    title: "coca_cola_half",
    price: 10000,
    type: "drink",
    image: coca_cola_half,
  },
  {
    title: "fanta_half",
    price: 10000,
    type: "drink",
    image: fanta_half,
  },
  {
    title: "sprite_half",
    price: 10000,
    type: "drink",
    image: sprite_half,
  },
  {
    title: "fuse_tea_half",
    price: 10000,
    type: "drink",
    image: fuse_tea_half,
  },
  {
    title: "bon_aqua_half",
    price: 5000,
    type: "drink",
    image: bon_aqua_half,
  },
]
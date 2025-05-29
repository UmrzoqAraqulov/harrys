import chicken_burger from '@/assets/images/tovuq-burger.jpg';
import chicken_bbq_burger from '@/assets/images/tovuq-BBQ-burger.jpg';
import chicken_chizburger from '@/assets/images/tovuq-chizburger.jpg';
import fresh_burger from '@/assets/images/fresh-burger.jpg';
import chicken_halapenyo_burger from '@/assets/images/tovuqli-halapenyo-burgeri.jpg';

import meat_burger from '@/assets/images/goshtli-burger.jpg';
import bbq_burger from '@/assets/images/BBQ-burger.jpg';
import chizburger from '@/assets/images/chizburger.jpg';
import dabl_chizburger from '@/assets/images/dabl-chizburger.jpg';
import halapenyo_burger from '@/assets/images/halapenyo-burgeri.jpg';

import meat_harryster from '@/assets/images/goshtli-harryster.jpg';
import harryster_bbq from '@/assets/images/harryster-BBQ.jpg';
import harryster_halapenyo from '@/assets/images/harryster-halapenyo.jpg';
import chiz_harryster from '@/assets/images/chiz-harryster.jpg';
import chicken_harryster from '@/assets/images/tovuqli-harryster.jpg';
import chicken_harryster_bbq from '@/assets/images/tovuq-harryster-BBQ.jpg';
import chicken_harryster_halapenyo from '@/assets/images/tovuq-harryster-halapenyo.jpg';
import chicken_chiz_harryster from '@/assets/images/tovuq-chiz-harryster.jpg';

import bbq_hot_dog from '@/assets/images/BBQ-hot-dog.jpg';
import cheese_bbq_hot_dog from '@/assets/images/pishloqli-BBQ-hot-dog.jpg';
import classic_hot_dog from '@/assets/images/klassik-hot-dog.jpg';
import cheese_crispy_hot_dog from '@/assets/images/pishloqli-crispy-hot-dog.jpg';
import cheese_classic_hot_dog from '@/assets/images/pishloqli-klassik-hot-dog.jpg';
import longer from '@/assets/images/longer.jpg';
import cheese_longer from '@/assets/images/pishloqli-longer.jpg';
import crispy_hot_dog from '@/assets/images/crispy-hot-dog.jpg';

import chicken_klab_sendvich from '@/assets/images/tovuq-klab-sendvich.jpg';
import turkey_klab_sendvich from '@/assets/images/indeyka-klab-sendvich.jpg';

import potato_fri_cheese from '@/assets/images/kartoshka-fri-pishloq-bilan.jpg';
import sweet_potato from '@/assets/images/jaydari-kartoshka.jpg';
import naggets from '@/assets/images/naggetslar.jpg';
import potato_fri from '@/assets/images/kartoshka-fri.jpg';
import potato_fri_cheese_halapenyo from '@/assets/images/kartoshka-fri-pishloq-va-halapenyo.jpg';

import ketchup_sous from '@/assets/images/pomidor-ketchup.png';
import bbq_sous from '@/assets/images/BBQ-sous.png';
import cheese_sous from '@/assets/images/pishloqli-sous.png';
import garlic_sous from '@/assets/images/sarimsoq-sous.png';

import bon_aqua_half from '@/assets/images/bon-aqua-gazsiz-half.jpg';
import sprite_half from '@/assets/images/sprite-half.jpg';
import fuse_tea_half from '@/assets/images/fuse-tea-mango-romashka.jpg';
import coca_cola_half from '@/assets/images/coca-cola-half.jpg';
import fanta_half from '@/assets/images/fanta-half.jpg';

import special_combo from '@/assets/images/special-combo.jpg';
import hot_deal_combo from '@/assets/images/hot-deal-combo.jpg';
import king_snack_combo from '@/assets/images/king-snack-combo.jpg';
import lunch_deal_combo from '@/assets/images/lunch-deal-combo.jpg';
import classic_combo from '@/assets/images/classic-сombo.jpg';

import { IData } from "@/types";

export const menuCategories = ["meatBurger", "chickenBurger", "combo", "meatHarryster", "chickenHarryster", "sendvich", "fri", "hotDog", "sous", "drink"];

export const menuData: IData[] = [
  {
    title: "special_combo",
    price: 25000,
    type: "combo",
    image: special_combo,
  },
  {
    title: "hot_deal_combo",
    price: 44000,
    type: "combo",
    image: hot_deal_combo,
  },
  {
    title: "king_snack_combo",
    price: 50000,
    type: "combo",
    image: king_snack_combo,
  },
  {
    title: "lunch_deal_combo",
    price: 52000,
    type: "combo",
    image: lunch_deal_combo,
  },
  {
    title: "classic_combo",
    price: 60000,
    type: "combo",
    image: classic_combo,
  },
  {
    title: "chicken_burger",
    price: 32000,
    type: "chickenBurger",
    image: chicken_burger,
  },
  {
    title: "chicken_bbq",
    price: 32000,
    type: "chickenBurger",
    image: chicken_bbq_burger,
  },
  {
    title: "chicken_chizburger",
    price: 35000,
    type: "chickenBurger",
    image: chicken_chizburger,
  },
  {
    title: "fresh_burger",
    price: 35000,
    type: "chickenBurger",
    image: fresh_burger,
  },
  {
    title: "chicken_halapenyo_burger",
    price: 32000,
    type: "chickenBurger",
    image: chicken_halapenyo_burger,
  },

  {
    title: "meat_burger",
    price: 40000,
    type: "meatBurger",
    image: meat_burger,
  },
  {
    title: "bbq_burger",
    price: 40000,
    type: "meatBurger",
    image: bbq_burger,
  },
  {
    title: "chizburger",
    price: 42000,
    type: "meatBurger",
    image: chizburger,
  },
  {
    title: "dabl_chizburger",
    price: 55000,
    type: "meatBurger",
    image: dabl_chizburger,
  },
  {
    title: "halapenyo_burger",
    price: 40000,
    type: "meatBurger",
    image: halapenyo_burger,
  },

  {
    title: "meat_harryster",
    price: 30000,
    type: "meatHarryster",
    image: meat_harryster,
  },
  {
    title: "harryster_bbq",
    price: 30000,
    type: "meatHarryster",
    image: harryster_bbq,
  },
  {
    title: "harryster_halapenyo",
    price: 30000,
    type: "meatHarryster",
    image: harryster_halapenyo,
  },
  {
    title: "chiz_harryster",
    price: 32000,
    type: "meatHarryster",
    image: chiz_harryster,
  },

  {
    title: "chicken_harryster",
    price: 27000,
    type: "chickenHarryster",
    image: chicken_harryster,
  },
  {
    title: "chicken_harryster_bbq",
    price: 27000,
    type: "chickenHarryster",
    image: chicken_harryster_bbq,
  },
  {
    title: "chicken_harryster_halapenyo",
    price: 27000,
    type: "chickenHarryster",
    image: chicken_harryster_halapenyo,
  },
  {
    title: "chicken_chiz_harryster",
    price: 29000,
    type: "chickenHarryster",
    image: chicken_chiz_harryster,
  },

  {
    title: "chicken_klab_sendvich",
    price: 38000,
    type: "sendvich",
    image: chicken_klab_sendvich,
  },
  {
    title: "turkey_klab_sendvich",
    price: 38000,
    type: "sendvich",
    image: turkey_klab_sendvich,
  },

  {
    title: "potato_fri_cheese",
    price: 20000,
    type: "fri",
    image: potato_fri_cheese,
  },
  {
    title: "sweet_potato",
    price: 16000,
    type: "fri",
    image: sweet_potato,
  },
  {
    title: "naggets",
    price: 15000,
    type: "fri",
    image: naggets,
  },
  {
    title: "potato_fri",
    price: 16000,
    type: "fri",
    image: potato_fri,
  },
  {
    title: "potato_fri_cheese_halapenyo",
    price: 22000,
    type: "fri",
    image: potato_fri_cheese_halapenyo,
  },

  {
    title: "bbq_hot_dog",
    price: 23000,
    type: "hotDog",
    image: bbq_hot_dog,
  },
  {
    title: "cheese_bbq_hot_dog",
    price: 25000,
    type: "hotDog",
    image: cheese_bbq_hot_dog,
  },
  {
    title: "classic_hot_dog",
    price: 23000,
    type: "hotDog",
    image: classic_hot_dog,
  },
  {
    title: "cheese_crispy_hot_dog",
    price: 25000,
    type: "hotDog",
    image: cheese_crispy_hot_dog,
  },
  {
    title: "cheese_classic_hot_dog",
    price: 25000,
    type: "hotDog",
    image: cheese_classic_hot_dog,
  },
  {
    title: "longer",
    price: 23000,
    type: "hotDog",
    image: longer,
  },
  {
    title: "cheese_longer",
    price: 25000,
    type: "hotDog",
    image: cheese_longer,
  },
  {
    title: "crispy_hot_dog",
    price: 23000,
    type: "hotDog",
    image: crispy_hot_dog,
  },

  {
    title: "ketchup_sous",
    price: 5000,
    type: "sous",
    image: ketchup_sous,
  },
  {
    title: "bbq_sous",
    price: 5000,
    type: "sous",
    image: bbq_sous,
  },
  {
    title: "cheese_sous",
    price: 5000,
    type: "sous",
    image: cheese_sous,
  },
  {
    title: "garlic_sous",
    price: 5000,
    type: "sous",
    image: garlic_sous,
  },

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
import { makeAutoObservable, action } from "mobx";
import $api from "../components/http";
import { toJS } from "mobx";

class Products {
  productPerpage = [];
  basket = [];
  url = "";
  prevUrl = "";
  nextUrl = "";
  count = "";
  category = "";
  limit = 4;
  constructor() {
    // Укажите `actions` в параметре конфигурации для makeAutoObservable
    makeAutoObservable(this, {
      addToBasket: action, // Указываем, что addToBasket является действием
    });
  }

  addToBasket(item) {
    const index = this.basket.findIndex(
      (basketItem) =>
        basketItem.id === item.id &&
        basketItem.selectedColor === item.selectedColor &&
        basketItem.selectedSize === item.selectedSize
    );

    if (index !== -1) {
      this.basket[index].quantity++;
    } else {
      this.basket.push(item);
    }
  }
  setUrl(url) {
    this.url = url;
  }

  findProductInBasket(item) {
    console.log(item);
    const index = this.basket.findIndex(
      (basketItem) =>
        basketItem.id === item.id &&
        basketItem.colorName === item.colorName &&
        basketItem.selectedSize === item.size
    );
    console.log(toJS(this.basket));
    return this.basket[index];
  }

  deleteFromBasket(item) {
    console.log("tut");
    const index = this.basket.findIndex(
      (basketItem) =>
        basketItem.id === item.id &&
        basketItem.colorName === item.colorName &&
        basketItem.selectedSize === item.selectedSize
    );
    console.log(index);
    if (index !== -1) {
      this.basket.splice(index, 1); // Удаляем элемент из массива
      localStorage.setItem("basket", JSON.stringify(store.basket));
    }
  }
  setNewBasket(basket) {
    this.basket = basket;
  }

  removeFromBasket(item) {
    const index = this.basket.indexOf(item);
    if (index !== -1) {
      this.basket.splice(index, 1);
    }
  }

  get cartQuantity() {
    return this.basket.length;
  }
  get maxPages() {
    return Math.ceil(this.count / this.limit);
  }
  async fetchProducts(url) {
    try {
      const response = await $api.get(url);
      console.log(response);
      this.productPerpage = response.data.results;
      if (response.data.previous)
        this.prevUrl = response.data.previous.replace(
          "https://kolos-api-prod.onrender.com/",
          ""
        );
      if (response.data.next)
        this.nextUrl = response.data.next.replace(
          "https://kolos-api-prod.onrender.com/",
          ""
        );
      this.count = response.data.count;
    } catch (e) {
      console.log(e);
    }
  }
  async fetchProduct(url) {
    try {
      const response = await $api.get(url);

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}

const store = new Products();

export default store;

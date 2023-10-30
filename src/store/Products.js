import { makeAutoObservable, action } from "mobx";
import $api from "../components/http";

class Products {
  productPerpage = [];

  basket = [];
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
  async fetchProducts(url) {
    try {
      const response = await $api.get(url);

      this.productPerpage = response.data.results;
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

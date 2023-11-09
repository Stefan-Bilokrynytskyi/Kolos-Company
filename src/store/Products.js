import { makeAutoObservable, action } from "mobx";
import $api from "../components/http";
import { toJS } from "mobx";

class Products {
  productPerpage = [];
  basket = [];
  page = 1;
  currentPage = 1;
  url = "";
  prevUrl = "";
  nextUrl = "";
  count = "";
  category = "";
  limit = 4;
  minPrice = 10;
  maxPrice = 100;
  constructor() {
    // Укажите `actions` в параметре конфигурации для makeAutoObservable
    makeAutoObservable(this, {
      addToBasket: action, // Указываем, что addToBasket является действием
    });
  }

  setCurrentPage(page) {
    this.currentPage = page;
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
      item.productPrice = item.price;
      this.basket.push(item);
    }
    localStorage.setItem("basket", JSON.stringify(this.basket));
  }
  setUrl(url) {
    this.url = url;
  }
  get Page() {
    return this.page;
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

  findIndexOfProductInBasket(item) {
    console.log(item);
    const index = this.basket.findIndex(
      (basketItem) =>
        basketItem.id === item.id &&
        basketItem.colorName === item.colorName &&
        basketItem.selectedSize === item.size
    );

    return index;
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
      localStorage.setItem("basket", JSON.stringify(this.basket));
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

  increaseProductQuantity(id, colorName, size) {
    const index = this.findIndexOfProductInBasket({ id, colorName, size });
    if (index !== -1) {
      this.basket[index].quantity++;
      this.basket[index].productPrice += this.basket[index].price;
    }
    localStorage.setItem("basket", JSON.stringify(this.basket));
  }

  decreaseProductQuantity(id, colorName, size) {
    const index = this.findIndexOfProductInBasket({ id, colorName, size });
    if (index !== -1) {
      this.basket[index].quantity--;
      this.basket[index].productPrice -= this.basket[index].price;
    }
    localStorage.setItem("basket", JSON.stringify(this.basket));
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    for (const item of this.basket) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice.toFixed(2);
  }

  setCount(count) {
    this.count = count;
  }

  setNextUrl(url) {
    this.nextUrl = url;
  }
  setPrevUrl(url) {
    this.prevUrl = url;
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

      this.productPerpage = response.data.results;
      if (response.data.previous)
        this.setPrevUrl(
          response.data.previous.replace(
            "https://kolos-api-prod.onrender.com/api",
            ""
          )
        );
      if (response.data.next)
        this.setNextUrl(
          response.data.next.replace(
            "https://kolos-api-prod.onrender.com/api",
            ""
          )
        );
      this.setCount(response.data.count);
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

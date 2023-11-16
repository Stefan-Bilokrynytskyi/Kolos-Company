import { makeAutoObservable, action } from "mobx";
import $api from "../components/http";
import { toJS } from "mobx";
import { Link } from "react-router-dom";

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
  isGlobalCategory = true;
  isFiltersChanged = false;
  isSizeFilterChanged = false;
  isPriceFilterChanged = false;
  genders = [];
  collections = [];
  sections = [];

  setSizeFilterChanged(isFilterSizeChanged) {
    this.isSizeFilterChanged = isFilterSizeChanged;
  }
  setPriceFilterChanged(isPriceFilterChanged) {
    this.isPriceFilterChanged = isPriceFilterChanged;
  }
  setIsFiltersChanged(isFiltersChanged) {
    this.isFiltersChanged = isFiltersChanged;
  }

  setCategory(category) {
    this.category = category;
  }

  updatePriceRange(minPrice, maxPrice) {
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
  }
  setGlobalCategory(isGlobalCategory) {
    this.isGlobalCategory = isGlobalCategory;
  }
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
  get Url() {
    return this.url;
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

  getAccordion() {
    const genders = this.genders;
    const collections = this.collections;
    const result = [{ Жінки: [] }, { Чоловіки: [] }, { Колекції: [] }];
    genders.map((elem) =>
      elem.gender.includes("Female")
        ? result[0]["Жінки"].push(
            <Link
              to={`/products/female/${this.category}/?amount_items=${this.limit}&category=${elem.link_name}`}
            >
              {elem.name}
            </Link>
          )
        : null
    );
    genders.map((elem) =>
      elem.gender.includes("Male")
        ? result[1]["Чоловіки"].push(
            <Link
              to={`/products/male/${this.category}/?amount_items=${this.limit}&category=${elem.link_name}`}
            >
              {elem.name}
            </Link>
          )
        : null
    );
    collections.map((elem) =>
      result[2]["Колекції"].push(
        <Link to={`${elem.link_name}`}>{elem.name}</Link>
      )
    );

    this.sections = [];
    this.sections.push(...result);
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
      console.log(response);

      this.productPerpage = response.data.results;
      this.updatePriceRange(
        response.data.results[0].min_price,
        response.data.results[0].max_price
      );

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
  async fetchCategoriesAndCollections(url) {
    try {
      const response = await $api.get(url);
      this.collections = response.data.collections;
      this.genders = response.data.categories;
      this.getAccordion();
    } catch (e) {
      console.log(e);
    }
  }
}

const store = new Products();

export default store;

import { makeAutoObservable, action } from "mobx";
import $api from "../components/http";
import { toJS } from "mobx";
import { Link } from "react-router-dom";

class Products {
  allProducts = [];
  productPerpage = [];
  collectionDescription = [];
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
  recommendedProducts = [];
  setCheckboxStates;
  setValues;
  isDeliveryPageSelected;
  setDeliveryPageSelected(isDeliveryPageSelected) {
    this.isDeliveryPageSelected = isDeliveryPageSelected;
  }
  setClearCheckboxes(setCheckboxStates) {
    this.setCheckboxStates = setCheckboxStates;
  }
  setClearValues(setValues) {
    this.setValues = setValues;
  }

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
    this.minPrice = Math.floor(minPrice);
    this.maxPrice = Math.ceil(maxPrice);
  }
  setGlobalCategory(isGlobalCategory) {
    this.isGlobalCategory = isGlobalCategory;
  }
  constructor() {
    makeAutoObservable(this, {
      addToBasket: action,
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

  isBasketProductsAvailable() {
    const basketData = toJS(this.basket);

    const findAvailableQuantity = (product, index) => {
      const availableQuantity = basketData[index].sizes_color_quantity.find(
        (item) =>
          item.color === product.colorName && item.size === product.selectedSize
      ).quantity;
      return availableQuantity;
    };

    return basketData.every(
      (item, index) => item.quantity <= findAvailableQuantity(item, index)
    );
  }

  findProductInBasket(item) {
    const index = this.basket.findIndex(
      (basketItem) =>
        basketItem.id === item.id &&
        basketItem.colorName === item.colorName &&
        basketItem.selectedSize === item.size
    );

    return this.basket[index];
  }

  findIndexOfProductInBasket(item) {
    console.log(item);
    const index = this.basket.findIndex(
      (basketItem) =>
        basketItem.id === item.id &&
        basketItem.colorName === item.colorName &&
        basketItem.selectedSize === item.selectedSize
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
        <Link to={`/collection-items/?collection=${elem.link_name}`}>
          {elem.name}
        </Link>
      )
    );

    this.sections = [];
    this.sections.push(...result);
  }

  deleteFromBasket(item) {
    const index = this.basket.findIndex(
      (basketItem) =>
        basketItem.id === item.id &&
        basketItem.colorName === item.colorName &&
        basketItem.selectedSize === item.selectedSize
    );

    if (index !== -1) {
      this.basket.splice(index, 1);
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

  increaseProductQuantity(id, colorName, selectedSize) {
    const index = this.findIndexOfProductInBasket({
      id,
      colorName,
      selectedSize,
    });
    if (index !== -1) {
      this.basket[index].quantity++;
      this.basket[index].productPrice += this.basket[index].price;
    }
    localStorage.setItem("basket", JSON.stringify(this.basket));
  }

  decreaseProductQuantity(id, colorName, selectedSize) {
    const index = this.findIndexOfProductInBasket({
      id,
      colorName,
      selectedSize,
    });
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

  generateRecommendations(allProducts, cartItems) {
    if (this.lastCartItems !== cartItems) {
      this.recommendedProducts.clear();

      const cartCategories = Array.from(
        new Set(cartItems.map((item) => item.category))
      );

      const filteredProducts = allProducts.filter((product) =>
        cartCategories.includes(product.category)
      );

      const uniqueFilteredProducts = filteredProducts.filter(
        (product) => !cartItems.some((item) => item.id === product.id)
      );

      let recommendedProducts = [...uniqueFilteredProducts];

      while (recommendedProducts.length < 6) {
        const remainingProducts = allProducts.filter(
          (product) => !cartItems.some((item) => item.id === product.id)
        );

        if (remainingProducts.length > 0) {
          const nextUniqueProduct = remainingProducts.find(
            (product) =>
              !recommendedProducts.some(
                (recProduct) => recProduct.id === product.id
              )
          );

          if (nextUniqueProduct) {
            recommendedProducts.push(nextUniqueProduct);
          } else {
            break;
          }
        } else {
          break;
        }
      }

      // Обновляем MobX-массив с рекомендациями
      this.recommendedProducts.replace(recommendedProducts);

      // Update lastCartItems
      this.lastCartItems = cartItems;
    }
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

  async fetchCollectionProducts(url) {
    try {
      const response = await $api.get(url);
      this.updatePriceRange(
        response.data.items[0].min_price,
        response.data.items[0].max_price
      );

      this.productPerpage = response.data.items;
      this.collectionDescription = response.data.collection;
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
      console.log(response.data);
      this.collections = response.data.collections;
      this.genders = response.data.categories;
      this.getAccordion();
    } catch (e) {
      console.log(e);
    }
  }

  async fetchAllProducts() {
    try {
      const response = await $api.get("/api/items/"); //нужно исправить!

      this.allProducts = response.data;
    } catch (e) {
      console.error(e);
    }
  }
}

const store = new Products();

export default store;

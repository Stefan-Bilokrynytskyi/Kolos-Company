import { makeAutoObservable } from "mobx";
import $api from "../components/http";

class Products {
  productPerpage = [];
  //url = "";
  selectedColor = "";
  constructor() {
    makeAutoObservable(this);
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

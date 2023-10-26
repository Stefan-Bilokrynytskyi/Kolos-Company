import { makeAutoObservable } from "mobx";
import axios from "axios";
import $api from "../components/http";

class Products {
  productPerpage = [];
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
}

const store = new Products();

export default store;

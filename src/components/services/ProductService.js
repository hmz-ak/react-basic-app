import Products from "../products/Products";
import GenericService from "./GenericService";

class ProductService extends GenericService {
  constructor() {
    super();
  }

  getProduct = (page = 1, perPage = 10) =>
    this.get("/products?page=" + page + "&perPage=" + perPage);
  getSingleProduct = (id) => this.get("/products/" + id);
  addProduct = (data) => this.post("/products", data);
  deleteProduct = (_id) => this.delete("/products/" + _id);
  updateProduct = (_id, data) => this.put("/products/" + _id, data);
}

let productService = new ProductService();
export default productService;

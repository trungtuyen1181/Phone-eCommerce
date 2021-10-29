import Http from "./Http";

export const getProducts = (config) => {
  return Http.get("/products", config);
};

export const getCategories = (config) => {
  return Http.get("/products/categories", config);
};

export const getCategory = (id, config) => {
  return Http.get(`products/category/${id}`, config);
};

export const getProductsCategory = (id, config) => {
  return Http.get(`products/category/${id}`, config);
};

export const getProduct = (id, config) => {
  return Http.get(`/products/${id}`, config);
};

export const order = (data, config) => {
  return Http.post(`/cart`, data, config);
};

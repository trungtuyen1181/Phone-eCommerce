import React from "react";
import Box from "@mui/material/Box";
import { getCategory, getProductsCategory } from "../servicers/Api";
import ProductItem from "../share/components/product-item";

// import Pagination from "../../shared/components/Pagination";

const CategoryPage = (props) => {
  const id = props.match.params.id;
  // console.log(id);
  const [category, setCategory] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [totalProduct, setTotalProduct] = React.useState(0);

  React.useEffect(() => {
    // Get Category
    getCategory(id).then(() => {
      // console.log(res.data);
      setCategory(id);
    });
    // Get Products By Category ID
    getProductsCategory(id).then((res) => {
      // console.log(res.data);
      setProducts(res.data);

      setTotalProduct(res.data.length);
    });
  }, [id]);
  // console.log(products);
  return (
    <div>
      {/*	List Product	*/}
      <div style={{ background: "rgb(236, 241, 249)" }}>
        <h3 style={{ padding: "20px 0 0 20px" }}>
          Loại sản phẩm {category}: ({totalProduct} mặt hàng)
        </h3>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            p: 1,
            m: 1,
          }}
        >
          {products.map((product) => {
            return <ProductItem item={product} key={product.title} />;
          })}
        </Box>
      </div>
      {/*	End List Product	*/}
      <div id="pagination">{/* <Pagination pages={pages} /> */}</div>
    </div>
  );
};
export default CategoryPage;

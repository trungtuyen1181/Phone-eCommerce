import React from "react";
import Box from "@mui/material/Box";
import { getProducts } from "../servicers/Api";
import ProductItem from "../share/components/product-item";

import Slider from "../share/components/layout/slider";

const HomePage = () => {
  const [latestProduct, setLatestProduct] = React.useState([]);
  const [featuredProduct, setFeaturedProduct] = React.useState([]);

  React.useEffect(() => {
    getProducts({
      params: {
        limit: 6,
      },
    }).then((res) => {
      setLatestProduct(res.data);
      // console.log(res.data);
    });
    // Get Featured Product
    getProducts({
      params: {
        limit: 6,
        //Tìm cách để rate >= 4
      },
    }).then((res) => {
      setFeaturedProduct(res.data);
    });
  }, []);
  // console.log(latestProduct);
  return (
    <div style={{ margin: "25px 0 10px 0" }}>
      <Slider />
      {/*	Feature Product	*/}
      <div className="products" style={{ background: "rgb(236, 241, 249)" }}>
        <h3 style={{ padding: "20px 0 0 20px" }}>Sản phẩm nổi bật:</h3>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            p: 1,
            m: 1,
          }}
        >
          {featuredProduct.map((product) => {
            return <ProductItem item={product} key={product.title} />;
          })}
        </Box>
      </div>
      {/*	End Feature Product	*/}
      {/*	Latest Product	*/}
      <div className="products" style={{ background: "rgb(236, 241, 249)" }}>
        <h3 style={{ padding: "20px 0 0 20px" }}>Sản phẩm mới:</h3>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            p: 1,
            m: 1,
          }}
        >
          {latestProduct.map((product) => {
            return <ProductItem item={product} key={product.title} />;
          })}
        </Box>
      </div>
      {/*	End Latest Product	*/}
    </div>
  );
};
export default HomePage;

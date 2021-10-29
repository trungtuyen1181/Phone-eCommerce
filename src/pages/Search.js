import React from "react";
import Box from "@mui/material/Box";
import ProductItem from "../share/components/product-item";
import { getProducts } from "../servicers/Api";
import Pagination from "../share/components/Pagination";

const SearchPage = (props) => {
  const query = new URLSearchParams(props.location.search);
  // console.log(query);
  const keyword = query.get("key");
  const page = query.get("page") || 1;
  // console.log(page);

  const [pages, updatePages] = React.useState({
    total: 0,
    limit: 6,
    currentPage: page,
  });

  const [products, updateProducts] = React.useState([]);

  React.useEffect(() => {
    getProducts({
      params: {
        title: keyword,
        limit: 6,
        page: page,
      },
    }).then((res) => {
      updateProducts(res.data);
      // console.log(res.data);
      // updatePages({ ...pages, ...res.config.params });
    });
  }, [keyword, page, pages]);
  // console.log(products);

  return (
    <>
      <div style={{ marginTop: "10px", background: "rgb(236, 241, 249)" }}>
        <h3 style={{ paddingTop: "20px", paddingLeft: "20px" }}>
          Kết quả tìm kiếm với từ khóa: <span>{keyword}</span>
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
            return <ProductItem key={product.title} item={product} />;
          })}
        </Box>
      </div>

      <div id="pagination">
        <Pagination pages={pages} />
      </div>
    </>
  );
};
export default SearchPage;

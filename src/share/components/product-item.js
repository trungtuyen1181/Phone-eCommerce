import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Link from "@mui/material/Link";

const ProductItem = ({ item }) => {
  return (
    <Card
      sx={{
        width: "32%",
        margin: "0 0.6% 1.2% 0.6%",
        maxHeight: "500px",
      }}
    >
      <Rating
        name="disabled"
        value={item.rating.rate}
        readOnly
        style={{ paddingTop: "10px", paddingLeft: "10px" }}
      />

      <Link href={`/product/${item.id}`}>
        <img
          src={item.image}
          alt=""
          style={{ width: "90%", height: "220px", margin: "15px 5% 0 5%" }}
        />
      </Link>
      <CardContent style={{}}>
        <Link
          href={`/product/${item.id}`}
          style={{ color: "orange" }}
          underline="hover"
          height="120px"
        >
          {item.title}
        </Link>
        <Typography variant="body2" color="red" style={{ marginTop: "10px" }}>
          Price: <b>{item.price} USD</b>
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ProductItem;

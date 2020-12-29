import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { Grid } from "@material-ui/core";
import { Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import productService from "../services/ProductService";
import userService from "../services/UserService";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  addBtn: {
    position: "absolute",
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

const Products = (props) => {
  const classes = useStyles();
  const [products, setProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const page = props.match.params.page ? props.match.params.page : 1;
  const getData = () => {
    productService
      .getProduct(page, perPage)
      .then((data) => {
        setProduct(data.products);
        setTotal(data.total);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getData, [page, perPage]);

  const handleClick = () => {
    console.log(props);
    props.history.push("/products/new");
  };
  return (
    <div>
      <h1>Products</h1>
      record per page :{" "}
      <select
        value={perPage}
        onChange={(e) => setPerPage(e.target.value)}
        style={{ width: "100px", height: "30px" }}
      >
        <option value="2">Two</option>
        <option value="10">Ten</option>
      </select>
      {userService.isLoggedIn() && (
        <>
          <Fab
            color="primary"
            aria-label="add"
            className={classes.addBtn}
            onClick={handleClick}
          >
            <AddIcon />
          </Fab>
        </>
      )}
      {products.length == 0 ? (
        <p>There are no products</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} onDelete={getData} />
          ))}
        </Grid>
      )}
      <Grid item xs={12}>
        <Pagination
          count={Math.ceil(total / perPage)}
          variant="outlined"
          shape="rounded"
          onChange={(e, value) => {
            console.log(value);
            props.history.push("/products/" + value);
          }}
        />
        Showing {(page - 1) * perPage} to{" "}
        {(page - 1) * perPage + products.length}
      </Grid>
    </div>
  );
};

export default Products;

import { Button, Grid, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AuthAdmin from "../auth/AuthAdmin";
import productService from "../services/ProductService";

const UpdateProduct = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const id = props.match.params.id;
  console.log(id);

  useEffect(() => {
    productService
      .getSingleProduct(id)
      .then((data) => {
        setName(data.name);
        setPrice(data.price);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <AuthAdmin>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Update Product</h1>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <TextField
            label="name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            type="number"
            label="price"
            fullWidth
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              productService
                .updateProduct(id, { name, price })
                .then((data) => {
                  console.log(data);
                  props.history.push("/products");
                })
                .catch((err) => {
                  console.log(err);
                  props.history.push("/products");
                });
            }}
          >
            Update Product
          </Button>
        </Grid>
      </Grid>
    </AuthAdmin>
  );
};

export default UpdateProduct;

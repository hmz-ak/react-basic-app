import { Button, Grid } from "@material-ui/core";
import React from "react";
import productService from "../services/ProductService";
import { withRouter } from "react-router";
import userService from "../services/UserService";

const SingleProduct = (props) => {
  const { product, onDelete, history } = props;
  console.log(props);
  return (
    <Grid item xs={4}>
      <h2>
        {product.name}
        {userService.isAdmin() && (
          <>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: 5, marginLeft: 5 }}
              onClick={(e) => {
                history.push("/products/update/" + product._id);
              }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                productService
                  .deleteProduct(product._id)
                  .then((data) => {
                    console.log(data);
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Delete
            </Button>
          </>
        )}
      </h2>
      <p>{product.price}</p>

      <hr />
    </Grid>
  );
};

export default withRouter(SingleProduct);

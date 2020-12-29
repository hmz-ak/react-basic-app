import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import userService from "./services/UserService";

const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    paddingRight: "1rem",
  },
}));

const TopMenu = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            <Link to="/" className={classes.link}>
              Home
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/products" className={classes.link}>
              Products
            </Link>
          </Typography>

          <Typography variant="h6">
            <Link to="/contactus" className={classes.link}>
              Contact Us
            </Link>
          </Typography>
          {!userService.isLoggedIn() ? (
            <>
              <Typography variant="h6">
                <Link to="/login" className={classes.link}>
                  Login
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link to="/register" className={classes.link}>
                  Register
                </Link>
              </Typography>
            </>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={(e) => {
                userService.logout();
                window.location.reload();
              }}
            >
              Logout{" "}
              {userService.getLoggedInUser().name +
                " " +
                userService.getLoggedInUser().role}
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopMenu;

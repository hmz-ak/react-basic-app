import React from "react";
import userService from "../services/UserService";
import { withRouter } from "react-router";
import { toast } from "react-toastify";

const AuthAdmin = (props) => {
  React.useEffect(() => {
    if (!userService.isAdmin()) {
      toast.error("You are not authorized to access this page!", {
        position: toast.POSITION.TOP_CENTER,
      });
      props.history.push("/products");
    }
  }, []);
  return <>{props.children}</>;
};

export default withRouter(AuthAdmin);

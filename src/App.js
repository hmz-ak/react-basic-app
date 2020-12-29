import TopMenu from "./components/TopMenu";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LandingPage from "./components/LandingPage";
import Products from "./components/products/Products";
import Contactus from "./components/Contactus";
import NotFound from "./components/NotFound";
import NewProduct from "./components/products/NewProduct";
import UpdateProduct from "./components/products/UpdateProduct";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
function App() {
  return (
    <Router>
      <div style={{ padding: 10 }}>
        <ToastContainer />

        <TopMenu />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/products/new" component={NewProduct} />
          <Route path="/products/update/:id" component={UpdateProduct} />
          <Route path="/products/:page?" component={Products} />
          <Route path="/contactus" component={Contactus} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={LandingPage} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

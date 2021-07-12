import React, { useContext } from "react";
import Products from "./products/Products";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Cart from "./cart/Cart";
import { GlobalState } from "../../GlobalState";
import { Switch, Route } from "react-router-dom";
import NotFound from "../mainPages/utils/not_found/NotFound";
import DetailProduct from "./detailProduct/DetailProduct";
import OrderHistory from "../mainPages/history/OrderHistory";
import Categories from "../mainPages/categories/Categories";
import CreateProduct from "./createProduct/CreateProduct";
import DeleteProduct from "./deleteProduct/deleteProduct";

function Pages() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;

  return (
    <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/detail/:id" exact component={DetailProduct} />
      <Route path="/login" exact component={isLogged ? NotFound : Login} />
      <Route
        path="/register"
        exact
        component={isLogged ? NotFound : Register}
      />
      <Route
        path="/category"
        exact
        component={isAdmin ? Categories : NotFound}
      />
      <Route
        path="/create_product"
        exact
        component={isAdmin ? CreateProduct : NotFound}
      />
      <Route
        path="/edit_product/:id"
        exact
        component={isAdmin ? CreateProduct : NotFound}
      />
      <Route
        path="/delete_product/:id"
        exact
        component={isAdmin ? DeleteProduct : NotFound}
      />
      <Route path="/cart" exact component={Cart} />
      <Route
        path="/history"
        exact
        component={isLogged ? OrderHistory : NotFound}
      />
      <Route path="*" exact component={NotFound} />
    </Switch>
  );
}

export default Pages;

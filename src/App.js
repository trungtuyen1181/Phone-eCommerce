import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getCategories } from "./servicers/Api";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Container from "@mui/material/Container";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Footer from "./share/components/layout/footer";
import Header from "./share/components/layout/header";
import Menu from "./share/components/layout/menu";
import Sidebar from "./share/components/layout/sidebar";

import HomePage from "./pages/Home";
import CategoryPage from "./pages/Category";
import ProductDetailsPage from "./pages/ProductDetails";
import SearchPage from "./pages/Search";
import CartPage from "./pages/Cart";
import SuccessPage from "./pages/Success";
import NotFoundPage from "./pages/NotFound";

const App = () => {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    getCategories({}).then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div style={{ background: "	#e7ecf4	" }}>
          <Container style={{ maxWidth: "1100px" }}>
            <Router>
              <Header />

              <div className="container">
                <nav>
                  <Menu item={categories} />
                </nav>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route
                          path="/products/category/:id"
                          component={CategoryPage}
                        />
                        <Route
                          path="/product/:id"
                          component={ProductDetailsPage}
                        />
                        <Route path="/search" component={SearchPage} />
                        <Route path="/cart" component={CartPage} />
                        <Route path="/success" component={SuccessPage} />
                        <Route component={NotFoundPage} />
                      </Switch>
                    </Grid>
                    <Grid item xs={4}>
                      <Sidebar />
                    </Grid>
                  </Grid>
                </Box>
              </div>

              <Footer />
            </Router>
          </Container>
        </div>
      </PersistGate>
    </Provider>
  );
};
export default App;

import React, { useState } from "react";
import "./index.css";
import { ArticleProvider, useArticle } from "./contexts/ArticleContext";
import ItemView from "./components/ItemView";
import { ThemeProvider } from "@mui/material/styles";
import ItemDescription from "./components/ItemDescription";
import createTheme from "@mui/material/styles/createTheme";
import { Container } from "@mui/material";
import Menu from "./components/Menu";
import AppLayout from "./components/AppLayout";
import { CartProvider, useCart } from "./contexts/CartContext";
import { UserProvider } from "./contexts/UserContext";

const theme = createTheme({
  palette: {
    primary: { main: "#dd5348" },
    secondary: { main: "#809dad" },
  },
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
      },
    },
    MuiListItem: {
      defaultProps: {
        disableGutters: true,
        disablePadding: true,
      },
    },
  },
  typography: {
    h6: {
      textTransform: "uppercase",
      color: "#dd5348",
    },
    subtitle1: {
      fontWeight: 600,
    },
    body2: {
      fontWeight: 600,
      color: "grey",
    },
  },
});

const App = () => {
  const [fixed, setFixed] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <ArticleProvider>
          <CartProvider>
            <AppLayout>
              <Container disableGutters>
                <Menu fixed={fixed} setFixed={setFixed} />
              </Container>
              <Container disableGutters sx={{ mt: fixed ? "110px" : "40px" }}>
                <ItemView />
                <ItemDescription />
              </Container>
            </AppLayout>
          </CartProvider>
        </ArticleProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;

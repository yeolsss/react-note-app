import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/config/configStore.ts";
import GlobalStyles from "./styles/GlobalStyles.ts";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme/theme.ts";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <RouterProvider router={Router} />
    </ThemeProvider>
  </Provider>,
);

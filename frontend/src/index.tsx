import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

// @ts-ignore CSS is loaded by the bundler; no TypeScript declaration is required here.
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();

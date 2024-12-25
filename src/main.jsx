import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import FilterContext from "./context/filterContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <Router>
    <FilterContext>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </FilterContext>
  </Router>
);

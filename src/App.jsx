import React from "react";
import "./App.scss";
import Movie from "./components/movie/Movie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const client = new QueryClient();
  return (
    <div className="app">
      <QueryClientProvider client={client}>
        <Movie />
      </QueryClientProvider>
    </div>
  );
};

export default App;

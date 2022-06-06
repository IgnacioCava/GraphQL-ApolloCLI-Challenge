import React from "react";
import "./App.css";
import { InMemoryCache } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Countries from "./Countries";
import SearchBar from "./components/SearchBar";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>
        Country search
        <SearchBar/>
      </h2>
    </div>
  </ApolloProvider>
);
export default App;

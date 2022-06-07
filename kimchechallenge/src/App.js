import React from "react";
import "./App.css";
import { InMemoryCache } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import SearchBar from "./components/searchbar/SearchBar";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <SearchBar/>
  </ApolloProvider>
);

export default App;


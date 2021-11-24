import * as React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-json-server";
import jsonServerProvider from "ra-data-json-server";
import { TodoList } from "./TodoList";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  options.headers.set(
    "Content-Type",
    "application/json",
    "Access-Control-Allow-Headers"
  );
  return fetchUtils.fetchJson(url, options);
};

const App = () => (
  <Admin
    dataProvider={Object.assign(
      jsonServerProvider("http://127.0.0.1:5000", httpClient)
    )}
  >
    <Resource name="todos" list={TodoList} />
  </Admin>
);

export default App;

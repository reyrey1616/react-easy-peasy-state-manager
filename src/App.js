import React from "react";
import model from "./model";
import { StoreProvider, createStore } from "easy-peasy";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import "./App.css";

const store = createStore(model);

function App() {
  return (
    <StoreProvider store={store}>
      <div className="container">
        <Users />
        <AddUser />
      </div>
    </StoreProvider>
  );
}

export default App;

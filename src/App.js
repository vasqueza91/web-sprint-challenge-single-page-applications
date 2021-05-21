import React from "react";
import { BrowserRouter, Route} from 'react-router-dom';
import Home from "./_tests_/Home"
import PizzaForm from "./PizzaForm";





export default function App() {
  
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact />
        <Route component={PizzaForm} path="/pizzaform" />
      </div>
    </BrowserRouter>
  );
}


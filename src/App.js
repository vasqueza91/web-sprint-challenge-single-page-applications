import React, { useState, useEffect } from "react";
import { Route, Link, Switch, } from 'react-router-dom'
import Home from "./_tests_/Home"
import PizzaForm from "./PizzaForm"
import Order from "./Checkout"
import axios from "axios"
import * as yup from 'yup'
import schema from "./FormSchema"


const initialFormValues = {
  name: '',
  size: '',
  sauce: '',
  special: '',
  pepperoni: false,
  ham: false,
  olives: false,
  bacon: false,
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
}

const initialOrders = []
const initialDisabled = true


export default function App() {

  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getOrders = () => {
    axios.get('https://reqres.in/api/orders')
    .then(res => {
      console.log(res.data.data)
      setOrders(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      setOrders([res.data, ...orders])
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }
  
  const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const formSubmit = () => {
    const newOrder ={
      name: formValues.name.trim(),
      special: formValues.special.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ['pepperoni', 'ham', 'olives', 'bacon'].filter(topping => formValues[topping])
    }
    postNewOrder(newOrder)
  }

  useEffect(() => {
    getOrders()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='App'>
    <nav>
      <h1 className='store-header'>Vinny's Pizza</h1>
      <div className='nav-links'>
        {/* 👉 STEP 3 - Make Links to navigate us Home (`/`) and Shop (`/items-list`) */}
        <Link to='/'>Home</Link>
        <Link id='order-pizza' to='/pizza'>Pizza</Link>
      </div>
    </nav>
    <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route  path='/pizza' >
        <PizzaForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
        {
          orders.map(order => {
            return (
              <Order key={order.id} details={order} />
            )
          })
        }
      </Route>
    </Switch>
  </div>
  );
}


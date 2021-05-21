import * as yup from 'yup';
import React, {useState} from 'react'
import axios from 'axios'
import Checkout from './Checkout'
import Nav from './Nav'


const initialOrderValues = {
    name: '',
    size:'',
    sauce:'',
    bacon: false,
    ham: false,
    olives: false,
    pepperoni: false,
    special:'',

}

const initialOrderErrors = {
    name: 'Please provide a name',
    size: 'Please choose a size',
}

function PizzaForm(){
const formSchema = yup.object().shape({
    name: yup.string().trim().required('Please enter your name').min(3, 'Name must be at least 3 characters long'),
    size: yup.string().required('Pick a size'),
    sauce: yup.string().required('Pick a sauce'),
    pepperoni: yup.boolean(),
    olives: yup.boolean(),
    bacon: yup.boolean(),
    ham: yup.boolean(),
    special: yup.string(),
})

const [orderValues, setOrderValues]=useState(initialOrderValues)
const [orderErrors, setOrderErrors]=useState(initialOrderErrors)
const [newOrder, setNewOrder] = useState(initialOrderValues)

const postNewOrder = (newOrder) => {
    axios
    .post('https://reqres.in/api/orders', newOrder)
    .then((res) => {
//console.log(res.data)
    setNewOrder(newOrder)
    })
    .catch((err) => {
      console.log(err);
    });
}
  const onSubmit = evt => {
    evt.preventDefault();
   postNewOrder(orderValues)
};
  const onChange = evt => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    inputChange(name, valueToUse);
}; 
const inputChange = (name, value) =>{
    yup
        .reach(formSchema, name)
        .validate(value)
        .then(() => {
    setOrderErrors({
            ...orderErrors,
            [name]: "",
})})
          .catch((err) => {
    setOrderErrors({
              ...orderErrors,
              [name]: err.errors[0],
})});
    setOrderValues({
        ...orderValues,
        [name]: value, 
});};

//pizza builder
return (<form onSubmit={onSubmit}>
<Nav/>
<div className = 'form'>
        <h1>Let's Get Started</h1>
    <label>
         Name
    <input
        value={orderValues.name}
        onChange={onChange}
        name='name'
        type='text'/>
</label>
<label>
    <select
     name='size'
     value={orderValues.size}
     onChange={onChange}>
        <option>----Select a size----</option>
        <option value="xl">Extra Large</option> 
        <option value="large">Large</option>
        <option value="medium">Medium</option>
        <option value="small">Small</option>
</select>
</label>

            <h2>Choice of Sauce</h2>
            <h4>(Required)</h4>
        <label>
            Red Sauce
            <input
            type="radio"
            name="sauce"
            value="red"
            checked={orderValues.sauce === "red"}
            onChange={onChange}
          />
</label>
    <label>
        Buffalo Sauce
          <input
            type="radio"
            name="sauce"
            value="buffalo"
            checked={orderValues.sauce === "buffalo"}
            onChange={onChange}
          />
</label>
    <label>
        Bbq Sauce
          <input
            type="radio"
            name="sauce"
            value="bbq"
            checked={orderValues.sauce === "bbq"}
            onChange={onChange}
          />
</label>
        <label>
          Alfredo
          <input
            type="radio"
            name="sauce"
            value="alfredo"
            checked={orderValues.sauce === "alfredo"}
            onChange={onChange}/>
</label>
            <h2>Add Toppings</h2>
            <h4>(up to 2 toppings maximum)</h4>

<div className="checks">
    <label> Pepperoni
        <input
            type="checkbox"
            name="pepperoni"
            checked={orderValues.pepperoni}
            onChange={onChange}/>

</label>
    <label> Olives
        <input
            type="checkbox"
            name="olives"
            checked= {orderValues.olives}
            onChange={onChange} />

</label>
    <label> Bacon
         <input
            type="checkbox"
            name="bacon"
            checked={orderValues.bacon}
            onChange={onChange} />

</label>
    <label> Ham
        <input
            type="checkbox"
            name="ham"
            checked={orderValues.ham}
            onChange={onChange}/>

</label>
</div>
<label>
<h2>Special Instructions</h2>
         <textarea>
             <input
                type="text"
                name="special"
                value={orderValues.special}
                onChange={onChange}
                placeholder=" Anything else you'd like to add?" rows ="4" cols="50"/>
        </textarea>
</label>
<div className="add-to">

    <button id="submit-btn" onClick={(evt)=> evt.preventDefault}>Add to order</button>
</div>
     <Checkout newOrder={newOrder} />
</div>
</form>
)}

export default PizzaForm 
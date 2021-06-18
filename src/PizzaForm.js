import React from 'react'

export default function PizzaForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }

  return (
    <form id='pizza-form' className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Let's Get Statred On Your Pizza</h2>

        {/* 🔥 DISABLE THE BUTTON */}
        <button id='order-button' disabled={disabled}>Add To Order</button>

        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.sauce}</div>
          <div>{errors.toppings}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Name
          <input id='name-input'
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Size
          <select id='size-dropdown'
            onChange={onChange}
            value={values.size}
            name='size'
          >
            <option value=''>- Select an option -</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
            <option value='xl'>Extra Large</option>
          </select>
        </label>

        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        {/* <label>Marinara
          <input 
            type='radio'
            name='sauce'
            value='marinara'
            onChange={onChange}
            checked={values.sauce === 'marinara'}
          />
        </label>

        <label>Buffalo
          <input
            type='radio'
            name='sauce'
            value='buffalo'
            onChange={onChange}
            checked={values.sauce === 'buffalo'}
          />
        </label>
        
        <label>Alfredo
          <input
            type='radio'
            name='sauce'
            value='alfredo'
            onChange={onChange}
            checked={values.sauce === 'alfredo'}
          />
        </label> */}
      </div>

      <div className='form-group checkboxes'>
        <h4>Toppings</h4>

        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        <label>Pepperoni
          <input 
            type='checkbox'
            name='pepperoni'
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>

        <label>Ham
          <input 
            type='checkbox'
            name='ham'
            checked={values.ham}
            onChange={onChange}
          />
        </label>

        <label>Olives
          <input 
            type='checkbox'
            name='olives'
            checked={values.olives}
            onChange={onChange}
          />
        </label>
        
        <label>Bacon
          <input 
            type='checkbox'
            name='bacon'
            checked={values.bacon}
            onChange={onChange}
          />
        </label>

        <label>Special Instructions
           <input id='special-text'
            type='text'
            name='special'
            value={values.special}
            onChange={onChange}
           />
        </label>
      </div>
    </form>
  )
}


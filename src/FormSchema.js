import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(3, 'Name must be 3 characters long'),
    size: yup
        .string()
        .required('Size is required'),
    
    pepperoni: yup.boolean(),
    olives: yup.boolean(),
    bacon: yup.boolean(),
    ham: yup.boolean(),
    instructions: yup.string(),
        
})

export default formSchema
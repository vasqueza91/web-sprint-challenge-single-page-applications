import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(3, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small', 'medium', 'large', 'xl'], 'Size is required'),
    
    sauce: yup
        .string()
        .oneOf(['marinara', 'buffalo', 'alfredo'], 'Sauce is required'),
    
    pepperoni: yup.boolean(),
    ham: yup.boolean(),
    olives: yup.boolean(),
    bacon: yup.boolean(),

    special: yup
        .string()
        .trim()
    
})

export default formSchema
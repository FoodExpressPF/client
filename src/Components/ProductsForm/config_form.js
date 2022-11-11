import * as Yup from 'yup'

export const initialValues = {
    name:'',
    description:'',
    price:0,
    type:[],
    rating:0,
    image:'',
    type_user:'admin',
    offer:'false'
}

///////////////////////////////////////////////VALIDATION

const required = '*This field cannot be empty'

export const validationSchema = Yup.object().shape({
    name: Yup.string()
    .min(4,'Name must be between 4 and 50 characters')
    .max(50,'Name must be between 4 and 50 characters')
    .required(required),

    description: Yup.string()
    .min(20,'Description must have a minimum of 20 characteres')
    .required(required),

    price: Yup.number()
    .min(0.5,'Price must be greater than 0')
    .required(required),

    image: Yup.string()
    .required(required),

    type: Yup.string()
    .required(required),

})





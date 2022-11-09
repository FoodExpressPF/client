import * as Yup from 'yup'

export const initialValues = {
    name:'',
    description:'',
    price:0,
    type:[],
    rating:'',
    image:''
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

    type: Yup.string()
    .required(required),

    rating: Yup.number()
    .min(1,'Rating must be between 0 and 5')
    .max(5,'Rating must be between 0 and 5')
})



  ///////////////////////////////////////////////ONSUBMIT
  export const onSubmit = e=>{
    e.preventDefault()    
    // dispatch(postRecipe(input))
    // .then(response=>alert(response.payload.message))
    // dispatch(getRecipes())
  }



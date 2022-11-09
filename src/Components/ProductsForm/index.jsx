import { initialValues, validationSchema } from './config_form';

//Libraries
import {useFormik} from 'formik'
import axios from 'axios'


const ProductsForm = () => {

    ///////////////////////////////////////////////ONCHANGE IMAGE INPUT

    const handleInputFile = e => {

      const file =  e.target.files[0]
      console.log(file)
  
      const reader =  new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = ()=>{
        values.image = reader.result
      }
    }

    ///////////////////////////////////////////////ONSUBMIT
    const onSubmit = e=>{
     
      axios({
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
},
  url: 'http://localhost:3001/createFood',
  data: values
})
    .then(response => console.log(response))
    .catch(error=>console.log(error));
  }


  const formik =useFormik({initialValues,validationSchema,onSubmit})
  const {handleSubmit, handleChange, handleBlur, errors, touched,values} = formik

console.log(errors)
  return (  
      <div>

        <form onSubmit={handleSubmit}>


            {/* IMAGE */}

         <label><strong>Image:</strong> <br />  
             <input 
                //  className=
                 type="file" 
                 name="image"
                 onChange={handleInputFile}
  
                />
         </label> 
            {values.image && (
              <img 
                src={values.image}
                alt="choosen" 
                style ={{height: '300px'}} 
              />
            )}  


         {/* NAME */}

          <fieldset>          
                <div>
                    <label><strong>Name:</strong>  
                     <input 
                        // className=
                        type="text" 
                        name="name" 
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </label>

                 {errors.name && touched.name && (
                        <p>{errors.name}
                        </p>
                    )}
                </div>

                {/* DESCRIPTION */}


             <div>
                 <label>
                     <strong>Description: <br /></strong>
                     <textarea 
                            // className=
                            name="description" 
                            rows="5" 
                            cols="30" 
                            value={values.description} 
                            placeholder="Write a description of the product here..."
                            onChange={handleChange}
                            onBlur={handleBlur}  
                          >  
                                  
                      </textarea>
                   </label>
        

                    {errors.description && touched.description && (
                      <p 
                        // className=
                      >{errors.description}</p>
                    )}
                </div>



                {/* PRICE */}

                <div>
                    <label>
                     <strong>Price:</strong> <br />

                     <input 
                        //  className=
                         name="price" 
                         type="number"
                         value={values.price} 
                         onChange={handleChange}
                         onBlur={handleBlur}
                        />         
                    </label> 

                    {errors.price && (
                      <p 
                        // className=
                      >{errors.price}</p>
                    )}  
                </div>   

                {/* TYPE */}

                <div>
                  <label>
                    <strong>Diet Type:</strong> <br />
                    <select 
                     type="select" 
                     name="type"
                     onChange={handleChange}
                     onBlur={handleBlur}
                    >
                      <option value="">Select a Diet Type</option>
                      <option value="Gluten Free">Gluten Free</option>
                      <option value="Vegetarian">Vegetarian</option>
                      <option value="Vegan">Vegan</option>
                      <option value="Protein">Protein</option>
                      <option value="Others">Others</option>
                    </select>
                  </label>
                </div>

             


              {/* Rating */} 

               <div>
                    <label>
                     <strong>Rating:</strong> <br />

                     <input 
                        //  className=
                         name="rating" 
                         type="number"
                         value={values.rating} 
                         onChange={handleChange}
                         onBlur={handleBlur}
                        />         
                    </label> 

                    {errors.rating && touched.rating && (
                      <p 
                        // className=
                      >{errors.rating}</p>
                    )}  
                </div>   
         </fieldset>

         

          <button 
            disabled={Object.entries(errors).length === 0 && touched.name?false:true} 
            type="submit" 
            // className={Object.entries(errors).length === 0?button:disabled}
          >
            Send
          </button>       
       </form>
     </div>
  );
  
};

export default ProductsForm
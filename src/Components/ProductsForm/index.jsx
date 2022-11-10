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
        <h2 className='mt-3 text-center'>Create New Product</h2>

        <form className='mx-auto w-50 my-5'  onSubmit={handleSubmit}>


            {/* IMAGE */}

          <div class="input-group mb-3">
           <label className= "w-100"><strong>Image:</strong> <br />  
             <input 
                 className="form-control"
                 type="file" 
                 name="image"
                 onChange={handleInputFile}
  
              />
           </label> 
         </div>
         

            {values.image && (
              <img 
                src={values.image}
                alt="choosen" 
                style ={{height: '300px'}} 
              />
            )}  


         {/* NAME */}

          <fieldset>          
                <div >
                  <div className="form-floating mb-3">
                    
                    {/* <strong>Name: <br /></strong>   */}
                    <input 
                      className={errors.name&&touched.name?"form-control is-invalid":"form-control"}
                      id="floatingInput"
                      placeholder="name@example.com"
                      type="text" 
                      name="name" 
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <label for="floatingInput">Name</label>
                  </div>               
                    

                 {errors.name && (
                        <p>{errors.name}
                        </p>
                    )}
                </div>

                {/* DESCRIPTION */}


             <div>
              <div className="form-floating mb-3">
                <textarea 
                      className={errors.description&&touched.description?"form-control is-invalid":"form-control"}
                      class="form-control" 
                      id="floatingTextarea"
                      
                      name="description" 
                      rows="5" 
                      cols="30" 
                      value={values.description} 
                      placeholder="Write a description of the product here..."
                      onChange={handleChange}
                      onBlur={handleBlur}  
                    >  
                            
                </textarea>
                <label for="floatingTextarea">Write a description of the product here...</label>
              </div>

                    {errors.description && touched.description && (
                      <p 
                        // className=
                      >{errors.description}</p>
                    )}
                </div>



                {/* PRICE */}

                <div>
                     <div className='input-group mb-3'>
                     <span class="input-group-text">$</span>
                     <input 
                        className={errors.price&&touched.price?"form-control is-invalid":"form-control"}
                        aria-label="Amount (to the nearest dollar)"
                        name="price" 
                        type="number"
                        placeholder='Price'
                        value={values.price} 
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />    
                      <span class="input-group-text">.00</span>
                      </div>     
                    

                    {errors.price && (
                      <p 
                        // className=
                      >{errors.price}</p>
                    )}  
                </div>   

                {/* TYPE */}

                <div>
                  <label className= "w-100">
                    <select 
                     className="form-select" aria-label="Default select example"
                     type="select" 
                     name="type"
                     onChange={handleChange}
                     onBlur={handleBlur}
                    >
                      <option>Select a Diet Type</option>
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
                    <label className= "w-100">
                     <strong>Rating:</strong> <br />

                     <input 
                         className="form-range" 
                         min="0" 
                         max="5"
                         step="0.5"
                         name="rating" 
                         type="range"
                         value={values.rating} 
                         onChange={handleChange}
                         onBlur={handleBlur}
                        />         
                    </label> 
                    <div>{values.rating}</div>

                    {errors.rating && touched.rating && (
                      <p 
                        // className=
                      >{errors.rating}</p>
                    )}  
                </div>   
         </fieldset>

         <div className="text-center mt-4">
         <button 
            disabled={Object.entries(errors).length !== 0?true:false} 
            type="submit" 
            className={Object.entries(errors).length === 0?"btn btn-danger btn-lg mx-auto":"btn btn-light btn-sm"}
          >
            Send
          </button>  

         </div>
  
       </form>
     </div>
  );
  
};

export default ProductsForm
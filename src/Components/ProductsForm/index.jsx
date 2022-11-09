//REACT
// import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { initialValues, onSubmit, validationSchema } from './config_form';

//Libraries authentication
import {useFormik} from 'formik'


const ProductsForm = () => {

  const dispatch=useDispatch()

  const formik =useFormik({initialValues,validationSchema,onSubmit})
  const {handleSubmit, handleChange, handleBlur, errors, touched,values} = formik

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


  // const handleOnClick = async e =>{
  //   e.preventDefault()
  //   const name = e.target.name
  //   setInput({...input,
  //     dietTypes: input.dietTypes.includes(name)?
  //       input.dietTypes.filter(e => e!==name):
  //       [...input.dietTypes,name]
  //   })
  //   // setActive(input.dietTypes)
  // }
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

                {/* DIET TYPES */}

             {/* {dietTypes &&
                    dietTypes.map((e,idx)=>(
                        <button 
                            className={input.dietTypes.includes(e.name)?s.button:s.inactive} 
                            name={e.name} 
                            onClick={handleOnClick} 
                            key={idx}>
                            {e.name}
                        </button>
                    ))
                } */}


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

         

          <input 
            disabled={Object.entries(errors).length === 0 && touched.name?false:true} 
            type="submit" 
            value="Crear Receta"
            // className={Object.entries(errors).length === 0?button:disabled}
          />       
       </form>
     </div>
  );
  
};

export default ProductsForm
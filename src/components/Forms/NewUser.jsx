import React, { useState } from 'react';
import { INITIAL_PRODUCT_FORM as initialValues } from '../../utils/initialObjects'

//Libraries
import { useFormik } from "formik";
import validationSchema from "./formValidations.js";
// import axios from "axios";


const NewUser = () => {

  const [loading, setLoading] = useState(false);

  ///////////////////////////////////////////////ONSUBMIT
  const onSubmit = (e) => {
    setLoading(true)
  }


    const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const {handleSubmit, handleChange, handleBlur, errors, touched,values} = formik
  return (  
    <div>
      <h2 className='mt-3 text-center'>Create New User</h2>

      
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
               {loading? 
                 <div className="d-flex justify-content-center">
                 <div className="spinner-border" role="status">
                   <span className="visually-hidden">Loading...</span>
                 </div>
               </div>
                 :<div>
                    {/* <h5 className="modal-title">{response}</h5> */}
                  </div>    
                }
             </div>

               <div className="modal-footer">
                 <button 
                 type="button" 
                 className="btn btn-secondary" 
                 data-bs-dismiss="modal">Close</button>
               </div>
             </div>
         </div>
       </div>

    <form className="mx-auto w-50 my-5" onSubmit={handleSubmit}>

      {/* NAME */}

      <fieldset>
        <div>
          <div className="form-floating mb-3">
            <input
              className={
                errors.name && touched.name
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="floatingInput"
              placeholder="name@example.com"
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="floatingInput">Name</label>
          </div>

          {errors.name && <p>{errors.name}</p>}
        </div>

        {/* EMAIL */}

        <div>
          <div className="form-floating mb-3">
            <input
              className={
                errors.email && touched.email
                  ? "form-control is-invalid"
                  : "form-control"
              }
              name="email"
              type='email'
              value={values.email}
              placeholder="Write your email..."
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            <label htmlFor="floatingTextarea">
              Write a email of the product here...
            </label>
          </div>

          {errors.email && touched.email && (
            <p
            // className=
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* DIRECTION */}

        <div>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              className={
                errors.direction && touched.direction
                  ? "form-control is-invalid"
                  : "form-control"
              }
              aria-label="Amount (to the nearest dollar)"
              name="direction"
              type="number"
              placeholder="direction"
              value={values.direction}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="input-group-text">.00</span>
          </div>

          {errors.direction && (
            <p
            // className=
            >
              {errors.direction}
            </p>
          )}
        </div>

        {/* NUMBER PHONE */}

        <div>
          <label className="w-100">
            <input
               className={
                errors.number_phone && touched.number_phone
                  ? "form-control is-invalid"
                  : "form-control"
              }
              type="number"
              name="number_phone"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
        </div>

        {/* CATEGORY */}

        <div>
          <label className="w-100">
            <select
              className="form-select"
              aria-label="Default select example"
              type="select"
              name="category"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option>Select a Category</option>
              <option value="Main Course">Main Course</option>
              <option value="Appetizer">Appetizer</option>
              <option value="Salad">Salad</option>
              <option value="Dessert">Dessert</option>
              <option value="Beverage">Beverage</option>
            </select>
          </label>
        </div>

        {/* Rating */}

        {/* <div>
                  <label className= "w-100">
                   <strong>Rating:</strong> <br />

                   <input 
                       className="form-range" 
                       min="0" 
                       max="5"
                       step="1"
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
              </div>    */}
      </fieldset>

      <div className="text-center mt-4">
        <button
          disabled={Object.entries(errors).length !== 0 ? true : false}
          type="submit"
          className={
            Object.entries(errors).length === 0
              ? "btn btn-danger btn-lg mx-auto"
              : "btn btn-light btn-sm"
          }
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Create
        </button>
      </div>
    </form>
  </div>
);
};

export default NewUser;
import React, { useState } from 'react';
import axios from 'axios';
import { INITIAL_USER_FORM as initialValues } from '../../../utils/initialObjects'

//Libraries
import { useFormik } from "formik";
import validationSchema from "./formValidations.js";
import { useDispatch } from 'react-redux';
import { getUser } from '../../../redux/actions';
// import axios from "axios";


const NewUser = () => {

  const [loading, setLoading] = useState(false);
  const[response, setResponse] = useState('');
  const dispatch = useDispatch()

  ///////////////////////////////////////////////ONSUBMIT
  const onSubmit = (e) => {
    setLoading(true);

    axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      url: "user/create",
      data: values,
    })   
     .then(response => {
      setResponse(
       `${response.data.created}
       ${response.data.user.email}`
      )
      console.log('response',response)
      setLoading(false)    
     })
     .catch(error=>{
      setResponse(error.message)
      setLoading(false)
     });
     formik.resetForm()
  }


    const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const {handleSubmit, handleChange, handleBlur, errors, touched,values} = formik
  console.log(errors)
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
                    <h5 className="modal-title">{response}</h5>
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
          <div className="form-floating mb-3">
            <input
              className={
                errors.direction && touched.direction
                  ? "form-control is-invalid"
                  : "form-control"
              }
              aria-label="Amount (to the nearest dollar)"
              name="direction"
              type="text"
              placeholder="Direction"
              value={values.direction}
              onChange={handleChange}
              onBlur={handleBlur}
            />
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
              type="tel"
              name="number_phone"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
        </div>

        {/* TYPE USER */}

        <div>
          <label className="w-100">
            <select
              className="form-select"
              aria-label="Default select example"
              type="select"
              name="type_user"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option>Select a User Rol</option>
              <option value="Client">Client</option>
              <option value="Admin">Admin</option>
            </select>
          </label>
        </div>

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
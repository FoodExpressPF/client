import React, { useState } from 'react';
import axios from 'axios';

//Libraries
import { useFormik } from "formik";
import validationSchema from "./formValidations";
import { useDispatch } from 'react-redux';
// import { getUser } from '../../../redux/actions';
// import axios from "axios";


const EditOrder = ({item, get}) => {

  const initialValues = item

  const [loading, setLoading] = useState(false);
  const[response, setResponse] = useState('');

  ///////////////////////////////////////////////ONSUBMIT
  const onSubmit = (e) => {
    setLoading(true);

    axios({
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      url: `/orders/${item.id}`,
      data: values,
    })   
     .then(response => {
      setResponse(
        `${response.data.message}`)

      console.log('response',response)
      setLoading(false)    
     })
     .catch(error=>{
      console.log('error',error)
      // setResponse(error.response.data)
      setLoading(false)
     });
     formik.resetForm()
     get()
  }


    const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const {handleSubmit, handleChange, handleBlur, errors, touched,values} = formik
  console.log(errors)
  return (  
    <div>
      <h2 className='mt-3 text-center'>Edit an Order</h2>

      
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

      {/* USER */}

      <fieldset>
        {/* <div>
          <div className="form-floating mb-3">
            <input
              className={
                errors.user && touched.user
                  ? "form-control is-invalid"
                  : "form-control"
              }
              id="floatingInput"
              placeholder="user@example.com"
              type="text"
              name="user"
              value={values.userId}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="floatingInput">User</label>
          </div>

          {errors.user && <p>{errors.user}</p>}
        </div> */}

        {/* STATE */}

        <div>
          <label className="w-100 mb-3">
            <select
              className="form-select"
              aria-label="Default select example"
              type="select"
              name="state"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.state}
            >
              <option>Select a State for your order</option>
              <option value="inProcces">In Procces</option>
              <option value="onTravel">On Travel</option>
              <option value="done">Done</option>
            </select>
          </label>
        </div>

        {/* ADDRESS */}

        <div>
          <div className="form-floating mb-3">
            <input
              className={
                errors.address && touched.address
                  ? "form-control is-invalid"
                  : "form-control"
              }
              name="address"
              type="text"
              placeholder="Add an address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="floatingTextarea">
              Add an address
            </label>
          </div>

          {errors.address && (
            <p
            // className=
            >
              {errors.address}
            </p>
          )}
        </div>








        {/* Total */}

        <div>
          <div className="form-floating mb-3">
            <input
             id="floatingTextarea"
              className={
                errors.total && touched.total
                  ? "form-control is-invalid"
                  : "form-control"
              }
              name="total"
              type='number'
              value={values.total}
              onChange={handleChange}
              onBlur={handleBlur}
            ></input>
            <label htmlFor="floatingTextarea">
              Total price
            </label>
          </div>

          {errors.total && touched.total && (
            <p
            // className=
            >
              {errors.total}
            </p>
          )}
        </div>

        

        {/* COMMENTS */}

        <div>
            <div className="form-floating mb-3">
              <textarea
                className={
                  errors.coments && touched.coments
                  ? "form-control is-invalid"
                    : "form-control"
                }
                id="floatingTextarea"
                name="coments"
                rows="5"
                cols="30"
                value={values.coments}
                placeholder="Write some comments..."
                onChange={handleChange}
                onBlur={handleBlur}
                ></textarea>
              <label htmlFor="floatingTextarea">
                Write your comments here...
              </label>
            </div>

            {errors.coments && touched.coments && (
              <p
              // className=
              >
                {errors.coments}
              </p>
            )}
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
          Edit
        </button>
      </div>
    </form>
  </div>
);
};

export default EditOrder;
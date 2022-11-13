import { useState } from "react";

import { initialValues, validationSchema } from "./config_form";

//Libraries
import { useFormik } from "formik";
import axios from "axios";

const ProductsForm = () => {
  const [previewImage, setPreviewImage] = useState(
    "https://res.cloudinary.com/dpnrbius0/image/upload/v1668109807/foodExpressRecipes/placeholder_xtwile.png"
  );
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);

  ///////////////////////////////////////////////ONCHANGE IMAGE INPUT

  const handleInputFile = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      values.image = reader.result;
      setPreviewImage(reader.result);
    };
  };

  ///////////////////////////////////////////////ONSUBMIT
  const onSubmit = (e) => {
    setLoading(true);

    axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      url: "http://localhost:3001/foods/create",
      data: values,
    })
      .then((response) => {
        setResponse(response.data.message);
        setLoading(false);
      })
     .then(response => {
      setResponse(response.data.message)
      setLoading(false)
     })
     .catch(error=>{
      setResponse(error.response.data)
      setLoading(false)
     });
     formik.resetForm()
  }
  console.log('response',response)

  const formik =useFormik({initialValues,validationSchema,onSubmit})
  const {handleSubmit, handleChange, handleBlur, errors, touched,values} = formik

  return (  
      <div>
        <h2 className='mt-3 text-center'>Create New Product</h2>

        
        <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                 {loading? 
                   <div class="d-flex justify-content-center">
                   <div class="spinner-border" role="status">
                     <span class="visually-hidden">Loading...</span>
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
        {/* IMAGE */}

        <img src={previewImage} alt="choosen" style={{ height: "200px" }} />
        <div className="input-group mb-3">
          <label className="w-100">
            <strong>Image:</strong> <br />
            <input
              className={
                errors.image ? "form-control is-invalid" : "form-control"
              }
              type="file"
              name="image"
              onChange={handleInputFile}
            />
          </label>
        </div>

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
              <label for="floatingInput">Name</label>
            </div>

            {errors.name && <p>{errors.name}</p>}
          </div>

          {/* DESCRIPTION */}

          <div>
            <div className="form-floating mb-3">
              <textarea
                className={
                  errors.description && touched.description
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="floatingTextarea"
                name="description"
                rows="5"
                cols="30"
                value={values.description}
                placeholder="Write a description of the product here..."
                onChange={handleChange}
                onBlur={handleBlur}
              ></textarea>
              <label for="floatingTextarea">
                Write a description of the product here...
              </label>
            </div>

            {errors.description && touched.description && (
              <p
              // className=
              >
                {errors.description}
              </p>
            )}
          </div>

          {/* PRICE */}

          <div>
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <input
                className={
                  errors.price && touched.price
                    ? "form-control is-invalid"
                    : "form-control"
                }
                aria-label="Amount (to the nearest dollar)"
                name="price"
                type="number"
                placeholder="Price"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="input-group-text">.00</span>
            </div>

            {errors.price && (
              <p
              // className=
              >
                {errors.price}
              </p>
            )}
          </div>

          {/* TYPE */}

          <div>
            <label className="w-100">
              <select
                className="form-select"
                aria-label="Default select example"
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

export default ProductsForm;

import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getUser } from "../../redux/actions";


export default function FormComent(){



    const handleSubmit = (e) => {
        console.log(id);
        console.log(stars);
        console.log(comment);
        e.preventDefault();
        dispatch(postComment({ id, stars, comment, user }));
        toast("Comment create successfuly!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        setComment(" ")
        window.location.reload()
      };


    return (
        <div>
            {userInit.id ? (
              <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <h4>Comment</h4>
                  <input
                    type="text"
                    onChange={(e) => handleChange(e)}                   
                    placeholder="complete..."
                  />
                  <h4>Starts</h4>
                  <input
                    type="number"
                    onChange={(e) => handleStar(e)}
                    placeholder="1->5"
                    className={styles.input}
                    min="1"
                    max="5"
                  />                 
                  <br />
                  <br />
                  <button
                    type="submit"                    
                    value="QUALIFY"
                  >QUALIFY</button>
                </form>
              </div>
            ) : <div></div>}
        </div>
    )
}
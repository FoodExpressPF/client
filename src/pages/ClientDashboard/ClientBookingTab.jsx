import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './ClientBookingTab.css';

export default function ClientBookingTab(){

  const [bookings, setBookings] = useState([]);
  const userInfo = useSelector(state => state.user);
  const [pagination, setPagination] = useState({numPages: 1, bookingsPerPage: 5, currentPage: 1});



  useEffect(()=>{
    axios.get(`/tables/${userInfo.id}`)
    .then(response=> response.data)
    .then(data => setBookings(data.reverse()))
    .catch(err => console.log(err));
  }, [userInfo]);

  useEffect(()=>{
    let newNumPages = Math.ceil(bookings.length / pagination.bookingsPerPage);
    setPagination({...pagination, numPages: newNumPages});
},[bookings]);

  function handlePagination(e){
    setPagination({...pagination,currentPage: parseInt(e.target.id)});
};

    return (<>
        <nav aria-label="bookingPagination">
            <ul class="pagination justify-content-center">
                <li class="page-item">
                <a class="page-link"  aria-label="Previous"  id='previus' onClick={e=>setPagination({...pagination, currentPage: 1})}>
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                {new Array(pagination.numPages).fill(0,0).map((e,index) =>{
                    return <li class='page-item'><a class="page-link" onClick={e => handlePagination(e)} id={index+1}>{index+1}</a></li>
                })}
                <li class="page-item">
                <a class="page-link"  aria-label="Next" id='next' onClick={e=>setPagination({...pagination, currentPage: pagination.numPages})}>
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
        </nav>

        <div class="accordion accordion-flush">
          {bookings.map((booking, index) => {
            if(index < ((pagination.currentPage-1) * pagination.bookingsPerPage) || index >= (pagination.currentPage * pagination.bookingsPerPage)) return;
            return <>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls="collapseTwo">
                  Booking for {booking.reservation_data}
                </button>
              </h2>
              <div id={`collapse${index}`} class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body" className='acordionBody'>
                  <p>Reserved at {booking.hour}hs</p>
                  <div>
                    <p>Foods:</p>
                  {booking.foods.map(food =>{
                    return <p>-{food.name}</p>
                    
                  })}
                    </div>
                </div>
              </div>
            </div>
            </>
          })}
        </div>
    </>);
};


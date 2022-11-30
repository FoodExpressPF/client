import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './ClientBookingTab.css';

export default function ClientBookingTab(){

  const [bookings, setBookings] = useState([]);
  const userInfo = useSelector(state => state.user);

  useEffect(()=>{
    axios.get(`/tables/${userInfo.id}`)
    .then(response=> response.data)
    .then(data => setBookings(data.reverse()))
    .catch(err => console.log(err));
  }, [userInfo]);

  console.log(bookings);
    return (<>
        <div class="accordion accordion-flush">
          {bookings.map((booking, index) => {
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


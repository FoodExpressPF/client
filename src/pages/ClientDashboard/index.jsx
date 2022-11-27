import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';

//components
import ClientTabInfo from './ClientTabInfo';
import useLocalStorage from '../../hooks/useLocalStorage';
import ClientOrdersTab from './ClientOrdersTab';
import NavBar from '../../components/NavBar/NavBar';
import ClientBookingTab from './ClientBookingTab';

export default function ClientDashboard(){
    const Cart = useLocalStorage("CART", "");

    return(
        <>
        <NavBar Cart={Cart}/>
            <div className='userDashConteiner'>
                <h2>Welcome!</h2>
            </div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">                                                 
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="user-info-tab" data-bs-toggle="tab" data-bs-target="#user-info-tab-pane" type="button" role="tab" aria-controls="user-info-tab-pane" aria-selected="true">User Info</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="orders-tab" data-bs-toggle="tab" data-bs-target="#orders-tab-pane" type="button" role="tab" aria-controls="orders-tab-pane" aria-selected="false">Orders</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="booking-tab" data-bs-toggle="tab" data-bs-target="#booking-tab-pane" type="button" role="tab" aria-controls="booking-tab-pane" aria-selected="false">Booking</button>
                </li>
                
            </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active infoTable" id="user-info-tab-pane" role="tabpanel" aria-labelledby="user-info-tab" tabindex="0">
                        <ClientTabInfo/>
                    </div>
                    <div class="tab-pane fade" id="orders-tab-pane" role="tabpanel" aria-labelledby="orders-tab" tabindex="0">
                        <ClientOrdersTab/>
                    </div>
                    <div class="tab-pane fade" id="booking-tab-pane" role="tabpanel" aria-labelledby="booking-tab" tabindex="0">
                        <ClientBookingTab/>
                    </div>
                </div>
                
        </>
    );
};
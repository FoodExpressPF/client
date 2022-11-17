import React from 'react';
import { useSelector } from 'react-redux';
import './index.css';

//components


export default function ClientDashboard(){

    const userInfo = useSelector(state => state.user);
    
    return(
        <>
            <div className='userDashConteiner'>
                <h2>Client dashboard</h2>
            </div>
            <ul class="nav nav-tabs" id="myTab" role="tablist navigation">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"  type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">User Info</button>
                </li>
                
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                    <div class="container text-center">
                        <div class='row'>
                            email: {userInfo.email}
                        <div class='row'>
                            user name: {userInfo.name}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function ClientTabInfo(){

    const userInfo = useSelector(state => state.user);
    const [user, setUser] = useState({...userInfo});
    const [canEdit, setCanEdit] = useState({
        name: false,
        direction: false,
        contact: false
    });

    function handleClick(e){
        if(canEdit[e.target.id]) setCanEdit({...canEdit, [e.target.id]: false});
        else setCanEdit({...canEdit, [e.target.id]: true});
    };

    function handleChange(e){
        setUser({...user, [e.target.id]: e.target.value});
    };

    async function onSubmit(){
        alert('nuevos datos enviados');
        await axios({
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            url: "http://localhost:3001/user/update/changefields",
            data: {name: user.name, phone_number: user.phone_number, direction: user.direction, id: user.id} 
        })
        .then(response => response.data)
        .then(data => alert(JSON.stringify(data)))
        .catch(err => alert(JSON.stringify(err)));

    };

    console.log(user);
    return(
        <>
            <table class='table table-striped'>
                <tbody>
                    <tr>
                        <th scope='row'>User</th>
                        <td colspan='2'>{user.email}</td>
                    </tr>
                    <tr>
                        <th scope='row'>Name</th>
                        {canEdit.name ? 
                            <input id='name' onChange={e=> handleChange(e)}></input> : 
                            <td id='nameTd'>{user.name}</td>}
                        <td><button className='editInfobtn' id='name' onClick={e =>handleClick(e)}>{canEdit.name ? 'insert' : 'edit'}</button></td>
                    </tr>
                    <tr>
                        <th scope='row'>Address</th>
                        {canEdit.direction ? 
                            <input id='direction' onChange={e=> handleChange(e)}></input> : 
                            <td id='directionTd'>{user.direction}</td>}
                        <td><button className='editInfobtn' id='direction' onClick={e =>handleClick(e)}>{canEdit.direction ? 'insert' : 'edit'}</button></td>
                    </tr>
                    <tr>
                        <th scope='row'>Contact</th>
                        {canEdit.contact ? 
                            <input id='number_phone' onChange={e=> handleChange(e)}></input> : 
                            <td id='contactTd'>{user.number_phone}</td>}
                        <td><button className='editInfobtn' id='contact' onClick={e =>handleClick(e)}>{canEdit.contact ? 'insert' : 'edit'}</button></td>
                    </tr>
                    <tr>
                        <th scope='row'>Type User</th>
                        <td colspan='2'>{user.type_user}</td>
                    </tr>
                </tbody>
            </table>
            <button class="btn btn-outline-dark" onClick={e=>onSubmit()}>Modificar Data</button>
        </>
    );
};
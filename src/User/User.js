import React, { useState } from 'react';

const User = (props) => {
    const { name, email, gender, image, salary, office, Phone } = props.user;

    const imageStyle = { height: '150px' };
    const userStyle = {
        border: '1px solid goldenrod',
        borderLeft: '1px solid goldenrod',
        borderRight: '1px solid goldenrod',
        margin: '10px',
        textAlign: 'left',
        paddingLeft: '50px',
        paddingBottom: '10px'
    }
    const [mobile, setMobile] = useState(" ");

    const showPhone = () => {
        setMobile(Phone)
    };
    return (
        <div style={userStyle}>
            <h1>Name: {name}</h1>
            <img style={imageStyle} src={image} alt="" />
            <h3>Email: {email}</h3>
            <p><small>Gender:{gender}</small></p>
            <h5>Salary: {salary}</h5>
            <p><small>Office:{office}</small></p>
            <p style={{ color: 'red', fontWeight: 'bold' }}>Phone: {mobile}</p>
            <button onClick={() => props.handleAddUser(props.user)}>Add Me</button>
            <button onClick={showPhone}>Saw Mobile Number</button>

        </div>
    );
};

export default User;

import React from 'react';

export const People = ({
    //An Image
FirstName,
Lastname,
Email, 
Phone,

fullname = `${FirstName} ${Lastname}` 

}) => (

    <li key={FirstName} className= "media col-12 col-md 6 col-xl-4 mt-5">
        <imag className = "mr_3" src={"image"} alt={fullname} height={90}/>
        <div className="media-body">
            <h3 className="h5 m-1">{fullname}</h3>
            <p>
                <a href={`mailtos $(Email)`}>{Email}</a>
            </p>

        </div>
    </li>

);
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Contact(props) {
    // const props = useParams();
    const { name } = useParams(); // pake obj destructuring
    // console.log(props);
    console.log(name);
    return (
        <div>
            <h1>Ini halaman contact</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, labore!
            </p>
        </div>
    )
}

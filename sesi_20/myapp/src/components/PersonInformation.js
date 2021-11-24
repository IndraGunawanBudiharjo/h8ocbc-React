import React, { Component, useState, useEffect } from 'react';
import Quote from './Quote';

function PersonInformation() {
    // const [personData, setPersonData] = useState({
    //     name: "Giorno",
    //     age: 17,
    //     quote: "Tiada hari tanpa ngoding React"
    // })

    const [name, setName] = useState("Jotaro")
    const [age, setAge] = useState(17)
    const [quote, setQuote] = useState("Tiada hari tanpa ngoding React")
    
    const changeName = () => {
        const newName = prevName => prevName + 5
        setName(newName)

        // const newName = personData.name + 5;
        // setPersonData({
        //     ...personData, 
        //     name: newName
        // })
    }

    const changeAge = () => {
        const newAge = prevAge => prevAge + 1
        setAge(newAge)
    }
    
    const changeQuote = () => {
        setQuote("Mari berFP ria")
    }

    // parameter 1 -> function
    // parameter 2 -> deps
    useEffect(() => {
        document.title = `My name is ${name}`
    }, [age, quote]) 
    // if (age changes || quote changes) -> run useEffect


    /*  penjelasan deps (dependency):
            [] -> useEffect hanya berlaku 1x
            [state] -> useEffect terjadi setiap kali state berubah
            tanpa deps -> useEffect akan terjadi selalu
    */

    return (
        <>
            <h1>Person Information</h1>
            <div>
                <span>Name: {name}</span><br/>
                <span>Age: {age}</span><br/>
                <span>Quote:</span>
                <Quote quote={quote} />
            </div>

            <button onClick={changeName}>Change Me</button>
            <button onClick={changeAge}>Age Me</button>
            <button onClick={changeQuote}>Quote Me</button> 
        </>
    )
}


// class PersonInformation extends Component {
//     constructor () {
//         super();

//         //  useState()
//         /*  
//             const [personData, setPersonData] = useState({
//                 name: "Giorno",
//                 age: 17,
//                 quote: "Tiada hari tanpa ngoding React"
//             })
//         */
//         this.state = {
//             name: "Giorno",
//             age: 17,
//             quote: "Tiada hari tanpa ngoding React"
//         }
//     }

//     render() {
//         return (
//             <>
//                 <h1>Person Information</h1>
//                 <div>
//                     <span>Name: {this.state.name}</span><br/>
//                     <span>Age: {this.state.age}</span><br/>
//                     <span>Quote:</span>
//                     <Quote quote={this.state.quote} />
//                 </div>
//             </>
//         )
//     }
// }

export default PersonInformation;
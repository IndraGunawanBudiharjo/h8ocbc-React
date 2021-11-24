import React, { useEffect, useState } from 'react'

function Quote(props) {
    // membuat sebuah stateless component
    // menjadi sebuah stateful component
    // dengan adanya hook useState()
    
    // penggunaanya:
    // const [state, useState] = useState()\
    // state = properti state
    // useState = function untuk manipulasi state
    // const [quote, setQuote] = useState(props.quote)

    // ketika ada perubahan dari props, maka ubah state quotenya
    // useEffect(() => {
    //     setQuote(props.quote)
    // }, [ props.quote ]) 
    // dependencynya manggil props, karena propsnya berubah ketika diupdate

    return (
        <>
            <blockquote>
                { props.quote } 
            </blockquote>
        </>
    )
}

export default Quote
import React, { useState, useEffect }from 'react'

export default function FetchComponent() {
    const [ baseURI ] = useState('https://cat-fact.herokuapp.com')
    const [ facts, setFacts ] = useState([])

    useEffect(() => {
        fetch(`${baseURI}/facts`)
        .then(response => response.json())
        .then(result => setFacts(result))
    }, [])

    return (
        <>
            { 
                /* { JSON.stringify(facts) } */
                facts.map(fact => (
                  <div key={fact._id}>
                    { fact.text }
                  </div>
                )) 
            }
        </>
    )
}

import React, { useState, useEffect } from 'react';


const RankItems = () => {

    const [items, setItems] = useState([]);
    const datatype = 1;

    useEffect(() => {
        fetch(`item/${datatype}`)
            .then((results) => {
                return results.json();
            })
            .then(data => {
                setItems(data); 
            })
    },[])

    return (
        <main>
            {
                (items.length > 0) ? items.map((item) => <h3>{item.title}</h3>):<div>Loading...</div>

            }
            
        </main>
        )
}

export default RankItems;
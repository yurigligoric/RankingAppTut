import React, { useState, useEffect } from 'react';
import MovieImagesArr from "./MovieImages.js";


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
            <div className="items-not-ranked">
            {
                    (items.length > 0) ? items.map((item) =>
                        <img id={`item-${item.id}`} src={MovieImagesArr.find(o => o.id === item.imageId)?.image } />)
                        
                        : <div>Loading...</div>

            }
            </div>
        </main>
        )
}

export default RankItems;